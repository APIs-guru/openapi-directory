package shared

type Inventory struct {
	Items      map[string]Item `json:"items"`
	Name       *string         `json:"name"`
	OsInfo     *OsInfo         `json:"osInfo"`
	UpdateTime *string         `json:"updateTime"`
}
