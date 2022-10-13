package shared

type CardFetchBody struct {
	ObjectTypes []CardObjectTypeBody `json:"objectTypes"`
	TargetURL   string               `json:"targetUrl"`
}
