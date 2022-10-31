package shared




type GoogleIdentityAccesscontextmanagerV1ServicePerimeterPerimeterTypeEnum string

const (
    GoogleIdentityAccesscontextmanagerV1ServicePerimeterPerimeterTypeEnumPerimeterTypeRegular GoogleIdentityAccesscontextmanagerV1ServicePerimeterPerimeterTypeEnum = "PERIMETER_TYPE_REGULAR"
GoogleIdentityAccesscontextmanagerV1ServicePerimeterPerimeterTypeEnumPerimeterTypeBridge GoogleIdentityAccesscontextmanagerV1ServicePerimeterPerimeterTypeEnum = "PERIMETER_TYPE_BRIDGE"
)


type GoogleIdentityAccesscontextmanagerV1ServicePerimeter struct {
    Description *string `json:"description,omitempty"`
    Name *string `json:"name,omitempty"`
    PerimeterType *GoogleIdentityAccesscontextmanagerV1ServicePerimeterPerimeterTypeEnum `json:"perimeterType,omitempty"`
    Spec *GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig `json:"spec,omitempty"`
    Status *GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig `json:"status,omitempty"`
    Title *string `json:"title,omitempty"`
    UseExplicitDryRunSpec *bool `json:"useExplicitDryRunSpec,omitempty"`
    
}

