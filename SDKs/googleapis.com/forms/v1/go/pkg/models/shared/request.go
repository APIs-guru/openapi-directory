package shared

type Request struct {
	CreateItem     *CreateItemRequest     `json:"createItem,omitempty"`
	DeleteItem     *DeleteItemRequest     `json:"deleteItem,omitempty"`
	MoveItem       *MoveItemRequest       `json:"moveItem,omitempty"`
	UpdateFormInfo *UpdateFormInfoRequest `json:"updateFormInfo,omitempty"`
	UpdateItem     *UpdateItemRequest     `json:"updateItem,omitempty"`
	UpdateSettings *UpdateSettingsRequest `json:"updateSettings,omitempty"`
}
