package operations

type GetIsosQueryParams struct {
	Name *string `queryParam:"style=form,explode=true,name=name"`
}

type GetIsosRequest struct {
	QueryParams GetIsosQueryParams
}

type GetIsos200ApplicationJSONIsosTypeEnum string

const (
	GetIsos200ApplicationJSONIsosTypeEnumPublic  GetIsos200ApplicationJSONIsosTypeEnum = "public"
	GetIsos200ApplicationJSONIsosTypeEnumPrivate GetIsos200ApplicationJSONIsosTypeEnum = "private"
)

type GetIsos200ApplicationJSONIsos struct {
	Deprecated  string                                `json:"deprecated"`
	Description string                                `json:"description"`
	ID          int64                                 `json:"id"`
	Name        string                                `json:"name"`
	Type        GetIsos200ApplicationJSONIsosTypeEnum `json:"type"`
}

type GetIsos200ApplicationJSONMetaPagination struct {
	LastPage     float64 `json:"last_page"`
	NextPage     float64 `json:"next_page"`
	Page         float64 `json:"page"`
	PerPage      float64 `json:"per_page"`
	PreviousPage float64 `json:"previous_page"`
	TotalEntries float64 `json:"total_entries"`
}

type GetIsos200ApplicationJSONMeta struct {
	Pagination GetIsos200ApplicationJSONMetaPagination `json:"pagination"`
}

type GetIsos200ApplicationJSON struct {
	Isos []GetIsos200ApplicationJSONIsos `json:"isos"`
	Meta *GetIsos200ApplicationJSONMeta  `json:"meta"`
}

type GetIsosResponse struct {
	ContentType                     string
	GetIsos200ApplicationJSONObject *GetIsos200ApplicationJSON
	StatusCode                      int64
}
