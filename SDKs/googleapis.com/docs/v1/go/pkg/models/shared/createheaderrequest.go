package shared

type CreateHeaderRequestTypeEnum string

const (
	CreateHeaderRequestTypeEnumHeaderFooterTypeUnspecified CreateHeaderRequestTypeEnum = "HEADER_FOOTER_TYPE_UNSPECIFIED"
	CreateHeaderRequestTypeEnumDefault                     CreateHeaderRequestTypeEnum = "DEFAULT"
)

// CreateHeaderRequest
// Creates a Header. The new header is applied to the SectionStyle at the location of the SectionBreak if specified, otherwise it is applied to the DocumentStyle. If a header of the specified type already exists, a 400 bad request error is returned.
type CreateHeaderRequest struct {
	SectionBreakLocation *Location                    `json:"sectionBreakLocation,omitempty"`
	Type                 *CreateHeaderRequestTypeEnum `json:"type,omitempty"`
}
