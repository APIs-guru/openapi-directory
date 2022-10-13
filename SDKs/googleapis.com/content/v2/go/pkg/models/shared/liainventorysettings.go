package shared

type LiaInventorySettings struct {
	InventoryVerificationContactEmail  *string `json:"inventoryVerificationContactEmail"`
	InventoryVerificationContactName   *string `json:"inventoryVerificationContactName"`
	InventoryVerificationContactStatus *string `json:"inventoryVerificationContactStatus"`
	Status                             *string `json:"status"`
}
