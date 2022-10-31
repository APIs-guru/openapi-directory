package shared

type CardDisplayPropertyDataTypeEnum string

const (
	CardDisplayPropertyDataTypeEnumBoolean  CardDisplayPropertyDataTypeEnum = "BOOLEAN"
	CardDisplayPropertyDataTypeEnumCurrency CardDisplayPropertyDataTypeEnum = "CURRENCY"
	CardDisplayPropertyDataTypeEnumDate     CardDisplayPropertyDataTypeEnum = "DATE"
	CardDisplayPropertyDataTypeEnumDatetime CardDisplayPropertyDataTypeEnum = "DATETIME"
	CardDisplayPropertyDataTypeEnumEmail    CardDisplayPropertyDataTypeEnum = "EMAIL"
	CardDisplayPropertyDataTypeEnumLink     CardDisplayPropertyDataTypeEnum = "LINK"
	CardDisplayPropertyDataTypeEnumNumeric  CardDisplayPropertyDataTypeEnum = "NUMERIC"
	CardDisplayPropertyDataTypeEnumString   CardDisplayPropertyDataTypeEnum = "STRING"
	CardDisplayPropertyDataTypeEnumStatus   CardDisplayPropertyDataTypeEnum = "STATUS"
)

type CardDisplayProperty struct {
	DataType CardDisplayPropertyDataTypeEnum `json:"dataType"`
	Label    string                          `json:"label"`
	Name     string                          `json:"name"`
	Options  []DisplayOption                 `json:"options"`
}
