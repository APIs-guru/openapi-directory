package shared

type CostMatrixDataInfo struct {
	Copyrights []string `json:"copyrights"`
	Took       *float64 `json:"took"`
}

type CostMatrixData struct {
	Distances [][]float64         `json:"distances"`
	Info      *CostMatrixDataInfo `json:"info"`
	Times     [][]int64           `json:"times"`
}

type CostMatrixTypeEnum string

const (
	CostMatrixTypeEnumDefault CostMatrixTypeEnum = "default"
	CostMatrixTypeEnumGoogle  CostMatrixTypeEnum = "google"
)

type CostMatrix struct {
	Data        *CostMatrixData     `json:"data"`
	LocationIds []string            `json:"location_ids"`
	Profile     *string             `json:"profile"`
	Type        *CostMatrixTypeEnum `json:"type"`
}
