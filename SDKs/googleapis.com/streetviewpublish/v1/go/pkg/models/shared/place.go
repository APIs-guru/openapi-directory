package shared

// Place
// Place metadata for an entity.
type Place struct {
	LanguageCode *string `json:"languageCode,omitempty"`
	Name         *string `json:"name,omitempty"`
	PlaceID      *string `json:"placeId,omitempty"`
}

// PlaceInput
// Place metadata for an entity.
type PlaceInput struct {
	PlaceID *string `json:"placeId,omitempty"`
}
