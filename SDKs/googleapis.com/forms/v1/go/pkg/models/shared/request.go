package shared

// RequestInput
// The kinds of update requests that can be made.
type RequestInput struct {
	CreateItem     *CreateItemRequestInput     `json:"createItem,omitempty"`
	DeleteItem     *DeleteItemRequest          `json:"deleteItem,omitempty"`
	MoveItem       *MoveItemRequest            `json:"moveItem,omitempty"`
	UpdateFormInfo *UpdateFormInfoRequestInput `json:"updateFormInfo,omitempty"`
	UpdateItem     *UpdateItemRequestInput     `json:"updateItem,omitempty"`
	UpdateSettings *UpdateSettingsRequest      `json:"updateSettings,omitempty"`
}
