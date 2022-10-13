package shared

type RecolorNameEnum string

const (
	RecolorNameEnumNone      RecolorNameEnum = "NONE"
	RecolorNameEnumLight1    RecolorNameEnum = "LIGHT1"
	RecolorNameEnumLight2    RecolorNameEnum = "LIGHT2"
	RecolorNameEnumLight3    RecolorNameEnum = "LIGHT3"
	RecolorNameEnumLight4    RecolorNameEnum = "LIGHT4"
	RecolorNameEnumLight5    RecolorNameEnum = "LIGHT5"
	RecolorNameEnumLight6    RecolorNameEnum = "LIGHT6"
	RecolorNameEnumLight7    RecolorNameEnum = "LIGHT7"
	RecolorNameEnumLight8    RecolorNameEnum = "LIGHT8"
	RecolorNameEnumLight9    RecolorNameEnum = "LIGHT9"
	RecolorNameEnumLight10   RecolorNameEnum = "LIGHT10"
	RecolorNameEnumDark1     RecolorNameEnum = "DARK1"
	RecolorNameEnumDark2     RecolorNameEnum = "DARK2"
	RecolorNameEnumDark3     RecolorNameEnum = "DARK3"
	RecolorNameEnumDark4     RecolorNameEnum = "DARK4"
	RecolorNameEnumDark5     RecolorNameEnum = "DARK5"
	RecolorNameEnumDark6     RecolorNameEnum = "DARK6"
	RecolorNameEnumDark7     RecolorNameEnum = "DARK7"
	RecolorNameEnumDark8     RecolorNameEnum = "DARK8"
	RecolorNameEnumDark9     RecolorNameEnum = "DARK9"
	RecolorNameEnumDark10    RecolorNameEnum = "DARK10"
	RecolorNameEnumGrayscale RecolorNameEnum = "GRAYSCALE"
	RecolorNameEnumNegative  RecolorNameEnum = "NEGATIVE"
	RecolorNameEnumSepia     RecolorNameEnum = "SEPIA"
	RecolorNameEnumCustom    RecolorNameEnum = "CUSTOM"
)

type Recolor struct {
	Name         *RecolorNameEnum `json:"name"`
	RecolorStops []ColorStop      `json:"recolorStops"`
}
