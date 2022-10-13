package shared

type ProductCreateModify struct {
	Custom *interface{} `json:"custom"`
	Key    *string      `json:"key"`
	Name   *string      `json:"name"`
	Serial *string      `json:"serial"`
}
