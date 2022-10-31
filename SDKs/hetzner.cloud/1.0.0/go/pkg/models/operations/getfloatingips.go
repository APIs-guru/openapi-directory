package operations

type GetFloatingIpsSortEnum string

const (
	GetFloatingIpsSortEnumID          GetFloatingIpsSortEnum = "id"
	GetFloatingIpsSortEnumIDAsc       GetFloatingIpsSortEnum = "id:asc"
	GetFloatingIpsSortEnumIDDesc      GetFloatingIpsSortEnum = "id:desc"
	GetFloatingIpsSortEnumCreated     GetFloatingIpsSortEnum = "created"
	GetFloatingIpsSortEnumCreatedAsc  GetFloatingIpsSortEnum = "created:asc"
	GetFloatingIpsSortEnumCreatedDesc GetFloatingIpsSortEnum = "created:desc"
)

type GetFloatingIpsQueryParams struct {
	LabelSelector *string                 `queryParam:"style=form,explode=true,name=label_selector"`
	Name          *string                 `queryParam:"style=form,explode=true,name=name"`
	Sort          *GetFloatingIpsSortEnum `queryParam:"style=form,explode=true,name=sort"`
}

type GetFloatingIpsRequest struct {
	QueryParams GetFloatingIpsQueryParams
}

type GetFloatingIps200ApplicationJSONFloatingIpsDNSPtr struct {
	DNSPtr string `json:"dns_ptr"`
	IP     string `json:"ip"`
}

type GetFloatingIps200ApplicationJSONFloatingIpsHomeLocation struct {
	City        string  `json:"city"`
	Country     string  `json:"country"`
	Description string  `json:"description"`
	ID          float64 `json:"id"`
	Latitude    float64 `json:"latitude"`
	Longitude   float64 `json:"longitude"`
	Name        string  `json:"name"`
	NetworkZone string  `json:"network_zone"`
}

type GetFloatingIps200ApplicationJSONFloatingIpsProtection struct {
	Delete bool `json:"delete"`
}

type GetFloatingIps200ApplicationJSONFloatingIpsTypeEnum string

const (
	GetFloatingIps200ApplicationJSONFloatingIpsTypeEnumIpv4 GetFloatingIps200ApplicationJSONFloatingIpsTypeEnum = "ipv4"
	GetFloatingIps200ApplicationJSONFloatingIpsTypeEnumIpv6 GetFloatingIps200ApplicationJSONFloatingIpsTypeEnum = "ipv6"
)

type GetFloatingIps200ApplicationJSONFloatingIps struct {
	Blocked      bool                                                    `json:"blocked"`
	Created      string                                                  `json:"created"`
	Description  string                                                  `json:"description"`
	DNSPtr       []GetFloatingIps200ApplicationJSONFloatingIpsDNSPtr     `json:"dns_ptr"`
	HomeLocation GetFloatingIps200ApplicationJSONFloatingIpsHomeLocation `json:"home_location"`
	ID           int64                                                   `json:"id"`
	IP           string                                                  `json:"ip"`
	Labels       map[string]string                                       `json:"labels"`
	Name         string                                                  `json:"name"`
	Protection   GetFloatingIps200ApplicationJSONFloatingIpsProtection   `json:"protection"`
	Server       int64                                                   `json:"server"`
	Type         GetFloatingIps200ApplicationJSONFloatingIpsTypeEnum     `json:"type"`
}

type GetFloatingIps200ApplicationJSONMetaPagination struct {
	LastPage     float64 `json:"last_page"`
	NextPage     float64 `json:"next_page"`
	Page         float64 `json:"page"`
	PerPage      float64 `json:"per_page"`
	PreviousPage float64 `json:"previous_page"`
	TotalEntries float64 `json:"total_entries"`
}

type GetFloatingIps200ApplicationJSONMeta struct {
	Pagination GetFloatingIps200ApplicationJSONMetaPagination `json:"pagination"`
}

type GetFloatingIps200ApplicationJSON struct {
	FloatingIps []GetFloatingIps200ApplicationJSONFloatingIps `json:"floating_ips"`
	Meta        *GetFloatingIps200ApplicationJSONMeta         `json:"meta,omitempty"`
}

type GetFloatingIpsResponse struct {
	ContentType                            string
	GetFloatingIps200ApplicationJSONObject *GetFloatingIps200ApplicationJSON
	StatusCode                             int64
}
