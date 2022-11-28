package operations

type GetSSHKeysSortEnum string

const (
	GetSSHKeysSortEnumID       GetSSHKeysSortEnum = "id"
	GetSSHKeysSortEnumIDAsc    GetSSHKeysSortEnum = "id:asc"
	GetSSHKeysSortEnumIDDesc   GetSSHKeysSortEnum = "id:desc"
	GetSSHKeysSortEnumName     GetSSHKeysSortEnum = "name"
	GetSSHKeysSortEnumNameAsc  GetSSHKeysSortEnum = "name:asc"
	GetSSHKeysSortEnumNameDesc GetSSHKeysSortEnum = "name:desc"
)

type GetSSHKeysQueryParams struct {
	Fingerprint   *string             `queryParam:"style=form,explode=true,name=fingerprint"`
	LabelSelector *string             `queryParam:"style=form,explode=true,name=label_selector"`
	Name          *string             `queryParam:"style=form,explode=true,name=name"`
	Sort          *GetSSHKeysSortEnum `queryParam:"style=form,explode=true,name=sort"`
}

type GetSSHKeys200ApplicationJSONMetaPagination struct {
	LastPage     float64 `json:"last_page"`
	NextPage     float64 `json:"next_page"`
	Page         float64 `json:"page"`
	PerPage      float64 `json:"per_page"`
	PreviousPage float64 `json:"previous_page"`
	TotalEntries float64 `json:"total_entries"`
}

type GetSSHKeys200ApplicationJSONMeta struct {
	Pagination GetSSHKeys200ApplicationJSONMetaPagination `json:"pagination"`
}

type GetSSHKeys200ApplicationJSONSSHKeys struct {
	Created     string            `json:"created"`
	Fingerprint string            `json:"fingerprint"`
	ID          int64             `json:"id"`
	Labels      map[string]string `json:"labels"`
	Name        string            `json:"name"`
	PublicKey   string            `json:"public_key"`
}

type GetSSHKeys200ApplicationJSON struct {
	Meta    *GetSSHKeys200ApplicationJSONMeta     `json:"meta,omitempty"`
	SSHKeys []GetSSHKeys200ApplicationJSONSSHKeys `json:"ssh_keys"`
}

type GetSSHKeysRequest struct {
	QueryParams GetSSHKeysQueryParams
}

type GetSSHKeysResponse struct {
	ContentType                        string
	GetSSHKeys200ApplicationJSONObject *GetSSHKeys200ApplicationJSON
	StatusCode                         int64
}
