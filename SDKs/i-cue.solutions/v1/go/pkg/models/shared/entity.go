package shared

type Entity struct {
	Address      *string `json:"address"`
	DbConnection *string `json:"dbConnection"`
	Email        *string `json:"email"`
	ID           *int32  `json:"id"`
	IsActive     *bool   `json:"isActive"`
	Name         *string `json:"name"`
	Token        *string `json:"token"`
}
