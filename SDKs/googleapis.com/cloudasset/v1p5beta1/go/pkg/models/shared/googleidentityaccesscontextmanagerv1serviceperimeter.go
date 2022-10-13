package shared

type GoogleIdentityAccesscontextmanagerV1ServicePerimeterPerimeterTypeEnum string

const (
	GoogleIdentityAccesscontextmanagerV1ServicePerimeterPerimeterTypeEnumPerimeterTypeRegular GoogleIdentityAccesscontextmanagerV1ServicePerimeterPerimeterTypeEnum = "PERIMETER_TYPE_REGULAR"
	GoogleIdentityAccesscontextmanagerV1ServicePerimeterPerimeterTypeEnumPerimeterTypeBridge  GoogleIdentityAccesscontextmanagerV1ServicePerimeterPerimeterTypeEnum = "PERIMETER_TYPE_BRIDGE"
)

type GoogleIdentityAccesscontextmanagerV1ServicePerimeter struct {
	Description           *string                                                                `json:"description"`
	Name                  *string                                                                `json:"name"`
	PerimeterType         *GoogleIdentityAccesscontextmanagerV1ServicePerimeterPerimeterTypeEnum `json:"perimeterType"`
	Spec                  *GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig            `json:"spec"`
	Status                *GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig            `json:"status"`
	Title                 *string                                                                `json:"title"`
	UseExplicitDryRunSpec *bool                                                                  `json:"useExplicitDryRunSpec"`
}
