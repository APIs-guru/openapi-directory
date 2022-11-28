package shared

type CreateFooterRequestTypeEnum string

const (
	CreateFooterRequestTypeEnumHeaderFooterTypeUnspecified CreateFooterRequestTypeEnum = "HEADER_FOOTER_TYPE_UNSPECIFIED"
	CreateFooterRequestTypeEnumDefault                     CreateFooterRequestTypeEnum = "DEFAULT"
)

// CreateFooterRequest
// Creates a Footer. The new footer is applied to the SectionStyle at the location of the SectionBreak if specified, otherwise it is applied to the DocumentStyle. If a footer of the specified type already exists, a 400 bad request error is returned.
type CreateFooterRequest struct {
	SectionBreakLocation *Location                    `json:"sectionBreakLocation,omitempty"`
	Type                 *CreateFooterRequestTypeEnum `json:"type,omitempty"`
}
