package shared

type GoogleIdentityAccesscontextmanagerV1ServicePerimeterPerimeterTypeEnum string

const (
	GoogleIdentityAccesscontextmanagerV1ServicePerimeterPerimeterTypeEnumPerimeterTypeRegular GoogleIdentityAccesscontextmanagerV1ServicePerimeterPerimeterTypeEnum = "PERIMETER_TYPE_REGULAR"
	GoogleIdentityAccesscontextmanagerV1ServicePerimeterPerimeterTypeEnumPerimeterTypeBridge  GoogleIdentityAccesscontextmanagerV1ServicePerimeterPerimeterTypeEnum = "PERIMETER_TYPE_BRIDGE"
)

// GoogleIdentityAccesscontextmanagerV1ServicePerimeter
// `ServicePerimeter` describes a set of Google Cloud resources which can freely import and export data amongst themselves, but not export outside of the `ServicePerimeter`. If a request with a source within this `ServicePerimeter` has a target outside of the `ServicePerimeter`, the request will be blocked. Otherwise the request is allowed. There are two types of Service Perimeter - Regular and Bridge. Regular Service Perimeters cannot overlap, a single Google Cloud project can only belong to a single regular Service Perimeter. Service Perimeter Bridges can contain only Google Cloud projects as members, a single Google Cloud project may belong to multiple Service Perimeter Bridges.
type GoogleIdentityAccesscontextmanagerV1ServicePerimeter struct {
	Description           *string                                                                `json:"description,omitempty"`
	Name                  *string                                                                `json:"name,omitempty"`
	PerimeterType         *GoogleIdentityAccesscontextmanagerV1ServicePerimeterPerimeterTypeEnum `json:"perimeterType,omitempty"`
	Spec                  *GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig            `json:"spec,omitempty"`
	Status                *GoogleIdentityAccesscontextmanagerV1ServicePerimeterConfig            `json:"status,omitempty"`
	Title                 *string                                                                `json:"title,omitempty"`
	UseExplicitDryRunSpec *bool                                                                  `json:"useExplicitDryRunSpec,omitempty"`
}
