package shared

type SchemaPackageSchematizedParsingTypeEnum string

const (
	SchemaPackageSchematizedParsingTypeEnumSchematizedParsingTypeUnspecified SchemaPackageSchematizedParsingTypeEnum = "SCHEMATIZED_PARSING_TYPE_UNSPECIFIED"
	SchemaPackageSchematizedParsingTypeEnumSoftFail                          SchemaPackageSchematizedParsingTypeEnum = "SOFT_FAIL"
	SchemaPackageSchematizedParsingTypeEnumHardFail                          SchemaPackageSchematizedParsingTypeEnum = "HARD_FAIL"
)

type SchemaPackageUnexpectedSegmentHandlingEnum string

const (
	SchemaPackageUnexpectedSegmentHandlingEnumUnexpectedSegmentHandlingModeUnspecified SchemaPackageUnexpectedSegmentHandlingEnum = "UNEXPECTED_SEGMENT_HANDLING_MODE_UNSPECIFIED"
	SchemaPackageUnexpectedSegmentHandlingEnumFail                                     SchemaPackageUnexpectedSegmentHandlingEnum = "FAIL"
	SchemaPackageUnexpectedSegmentHandlingEnumSkip                                     SchemaPackageUnexpectedSegmentHandlingEnum = "SKIP"
	SchemaPackageUnexpectedSegmentHandlingEnumParse                                    SchemaPackageUnexpectedSegmentHandlingEnum = "PARSE"
)

type SchemaPackage struct {
	IgnoreMinOccurs           *bool                                       `json:"ignoreMinOccurs"`
	Schemas                   []Hl7SchemaConfig                           `json:"schemas"`
	SchematizedParsingType    *SchemaPackageSchematizedParsingTypeEnum    `json:"schematizedParsingType"`
	Types                     []Hl7TypesConfig                            `json:"types"`
	UnexpectedSegmentHandling *SchemaPackageUnexpectedSegmentHandlingEnum `json:"unexpectedSegmentHandling"`
}
