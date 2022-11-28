package shared

type SheetPropertiesSheetTypeEnum string

const (
	SheetPropertiesSheetTypeEnumSheetTypeUnspecified SheetPropertiesSheetTypeEnum = "SHEET_TYPE_UNSPECIFIED"
	SheetPropertiesSheetTypeEnumGrid                 SheetPropertiesSheetTypeEnum = "GRID"
	SheetPropertiesSheetTypeEnumObject               SheetPropertiesSheetTypeEnum = "OBJECT"
	SheetPropertiesSheetTypeEnumDataSource           SheetPropertiesSheetTypeEnum = "DATA_SOURCE"
)

// SheetProperties
// Properties of a sheet.
type SheetProperties struct {
	DataSourceSheetProperties *DataSourceSheetProperties    `json:"dataSourceSheetProperties,omitempty"`
	GridProperties            *GridProperties               `json:"gridProperties,omitempty"`
	Hidden                    *bool                         `json:"hidden,omitempty"`
	Index                     *int32                        `json:"index,omitempty"`
	RightToLeft               *bool                         `json:"rightToLeft,omitempty"`
	SheetID                   *int32                        `json:"sheetId,omitempty"`
	SheetType                 *SheetPropertiesSheetTypeEnum `json:"sheetType,omitempty"`
	TabColor                  *Color                        `json:"tabColor,omitempty"`
	TabColorStyle             *ColorStyle                   `json:"tabColorStyle,omitempty"`
	Title                     *string                       `json:"title,omitempty"`
}
