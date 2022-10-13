package shared

type SheetPropertiesSheetTypeEnum string

const (
	SheetPropertiesSheetTypeEnumSheetTypeUnspecified SheetPropertiesSheetTypeEnum = "SHEET_TYPE_UNSPECIFIED"
	SheetPropertiesSheetTypeEnumGrid                 SheetPropertiesSheetTypeEnum = "GRID"
	SheetPropertiesSheetTypeEnumObject               SheetPropertiesSheetTypeEnum = "OBJECT"
	SheetPropertiesSheetTypeEnumDataSource           SheetPropertiesSheetTypeEnum = "DATA_SOURCE"
)

type SheetProperties struct {
	DataSourceSheetProperties *DataSourceSheetProperties    `json:"dataSourceSheetProperties"`
	GridProperties            *GridProperties               `json:"gridProperties"`
	Hidden                    *bool                         `json:"hidden"`
	Index                     *int32                        `json:"index"`
	RightToLeft               *bool                         `json:"rightToLeft"`
	SheetID                   *int32                        `json:"sheetId"`
	SheetType                 *SheetPropertiesSheetTypeEnum `json:"sheetType"`
	TabColor                  *Color                        `json:"tabColor"`
	TabColorStyle             *ColorStyle                   `json:"tabColorStyle"`
	Title                     *string                       `json:"title"`
}
