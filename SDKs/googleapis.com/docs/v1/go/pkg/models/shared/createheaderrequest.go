package shared

type CreateHeaderRequestTypeEnum string

const (
	CreateHeaderRequestTypeEnumHeaderFooterTypeUnspecified CreateHeaderRequestTypeEnum = "HEADER_FOOTER_TYPE_UNSPECIFIED"
	CreateHeaderRequestTypeEnumDefault                     CreateHeaderRequestTypeEnum = "DEFAULT"
)

type CreateHeaderRequest struct {
	SectionBreakLocation *Location                    `json:"sectionBreakLocation"`
	Type                 *CreateHeaderRequestTypeEnum `json:"type"`
}
