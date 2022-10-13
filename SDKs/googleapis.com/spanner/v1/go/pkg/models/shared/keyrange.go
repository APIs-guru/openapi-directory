package shared

type KeyRange struct {
	EndClosed   []interface{} `json:"endClosed"`
	EndOpen     []interface{} `json:"endOpen"`
	StartClosed []interface{} `json:"startClosed"`
	StartOpen   []interface{} `json:"startOpen"`
}
