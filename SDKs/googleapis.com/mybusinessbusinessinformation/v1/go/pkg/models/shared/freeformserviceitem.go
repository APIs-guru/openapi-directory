package shared

// FreeFormServiceItem
// Represents a free-form service offered by the merchant. These are services that are not exposed as part of our structure service data. The merchant manually enters the names for of such services via a geomerchant surface.
type FreeFormServiceItem struct {
	Category *string `json:"category,omitempty"`
	Label    *Label  `json:"label,omitempty"`
}
