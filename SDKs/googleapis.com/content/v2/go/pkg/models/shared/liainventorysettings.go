package shared

type LiaInventorySettings struct {
	InventoryVerificationContactEmail  *string `json:"inventoryVerificationContactEmail,omitempty"`
	InventoryVerificationContactName   *string `json:"inventoryVerificationContactName,omitempty"`
	InventoryVerificationContactStatus *string `json:"inventoryVerificationContactStatus,omitempty"`
	Status                             *string `json:"status,omitempty"`
}
