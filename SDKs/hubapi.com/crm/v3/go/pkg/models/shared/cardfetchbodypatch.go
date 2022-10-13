package shared

type CardFetchBodyPatch struct {
	ObjectTypes []CardObjectTypeBody `json:"objectTypes"`
	TargetURL   *string              `json:"targetUrl"`
}
