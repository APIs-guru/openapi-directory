package shared

type OutlierResponseTypeEnum string

const (
	OutlierResponseTypeEnumAdditive        OutlierResponseTypeEnum = "Additive"
	OutlierResponseTypeEnumLevelShift      OutlierResponseTypeEnum = "LevelShift"
	OutlierResponseTypeEnumTemporaryChange OutlierResponseTypeEnum = "TemporaryChange"
	OutlierResponseTypeEnumSeasonal        OutlierResponseTypeEnum = "Seasonal"
)

type OutlierResponse struct {
	Index *int32                   `json:"index"`
	Type  *OutlierResponseTypeEnum `json:"type"`
	Value *float64                 `json:"value"`
}
