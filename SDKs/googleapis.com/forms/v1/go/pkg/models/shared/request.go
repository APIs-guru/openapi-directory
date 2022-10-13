package shared

type Request struct {
	CreateItem     *CreateItemRequest     `json:"createItem"`
	DeleteItem     *DeleteItemRequest     `json:"deleteItem"`
	MoveItem       *MoveItemRequest       `json:"moveItem"`
	UpdateFormInfo *UpdateFormInfoRequest `json:"updateFormInfo"`
	UpdateItem     *UpdateItemRequest     `json:"updateItem"`
	UpdateSettings *UpdateSettingsRequest `json:"updateSettings"`
}
