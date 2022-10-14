package shared

type Entity struct {
	Address      *string `json:"address,omitempty"`
	DbConnection *string `json:"dbConnection,omitempty"`
	Email        *string `json:"email,omitempty"`
	ID           *int32  `json:"id,omitempty"`
	IsActive     *bool   `json:"isActive,omitempty"`
	Name         *string `json:"name,omitempty"`
	Token        *string `json:"token,omitempty"`
}
