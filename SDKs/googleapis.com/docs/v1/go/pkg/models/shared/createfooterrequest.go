package shared

type CreateFooterRequestTypeEnum string

const (
	CreateFooterRequestTypeEnumHeaderFooterTypeUnspecified CreateFooterRequestTypeEnum = "HEADER_FOOTER_TYPE_UNSPECIFIED"
	CreateFooterRequestTypeEnumDefault                     CreateFooterRequestTypeEnum = "DEFAULT"
)

type CreateFooterRequest struct {
	SectionBreakLocation *Location                    `json:"sectionBreakLocation"`
	Type                 *CreateFooterRequestTypeEnum `json:"type"`
}
