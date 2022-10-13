package shared

type InsertSectionBreakRequestSectionTypeEnum string

const (
	InsertSectionBreakRequestSectionTypeEnumSectionTypeUnspecified InsertSectionBreakRequestSectionTypeEnum = "SECTION_TYPE_UNSPECIFIED"
	InsertSectionBreakRequestSectionTypeEnumContinuous             InsertSectionBreakRequestSectionTypeEnum = "CONTINUOUS"
	InsertSectionBreakRequestSectionTypeEnumNextPage               InsertSectionBreakRequestSectionTypeEnum = "NEXT_PAGE"
)

type InsertSectionBreakRequest struct {
	EndOfSegmentLocation *EndOfSegmentLocation                     `json:"endOfSegmentLocation"`
	Location             *Location                                 `json:"location"`
	SectionType          *InsertSectionBreakRequestSectionTypeEnum `json:"sectionType"`
}
