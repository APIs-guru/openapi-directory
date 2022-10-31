package shared



type CostMatrixDataInfo struct {
    Copyrights []string `json:"copyrights,omitempty"`
    Took *float64 `json:"took,omitempty"`
    
}

type CostMatrixData struct {
    Distances [][]float64 `json:"distances,omitempty"`
    Info *CostMatrixDataInfo `json:"info,omitempty"`
    Times [][]int64 `json:"times,omitempty"`
    
}


type CostMatrixTypeEnum string

const (
    CostMatrixTypeEnumDefault CostMatrixTypeEnum = "default"
CostMatrixTypeEnumGoogle CostMatrixTypeEnum = "google"
)


type CostMatrix struct {
    Data *CostMatrixData `json:"data,omitempty"`
    LocationIds []string `json:"location_ids,omitempty"`
    Profile *string `json:"profile,omitempty"`
    Type *CostMatrixTypeEnum `json:"type,omitempty"`
    
}

