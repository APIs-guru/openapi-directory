package shared

// CardFetchBody
// Configuration for this card's data fetch request.
type CardFetchBody struct {
	ObjectTypes []CardObjectTypeBody `json:"objectTypes"`
	TargetURL   string               `json:"targetUrl"`
}
