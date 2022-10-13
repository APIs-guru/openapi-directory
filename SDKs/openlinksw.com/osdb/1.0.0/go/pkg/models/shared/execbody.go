package shared

type ExecBodyOsdbOutputTypeEnum string

const (
	ExecBodyOsdbOutputTypeEnumURLOnly     ExecBodyOsdbOutputTypeEnum = "url_only"
	ExecBodyOsdbOutputTypeEnumGenerateRdf ExecBodyOsdbOutputTypeEnum = "generate_rdf"
	ExecBodyOsdbOutputTypeEnumDisplayRdf  ExecBodyOsdbOutputTypeEnum = "display_rdf"
)

type ExecBody struct {
	ActionSpecificProperty1 *string                     `json:"action_specific_property1"`
	ActionSpecificProperty2 *string                     `json:"action_specific_property2"`
	OsdbBodyDataEncoding    *string                     `json:"osdb:body_data_encoding"`
	OsdbBodyDataRaw         *string                     `json:"osdb:body_data_raw"`
	OsdbBodyDataSrcURL      *string                     `json:"osdb:body_data_src_url"`
	OsdbOutputType          *ExecBodyOsdbOutputTypeEnum `json:"osdb:output_type"`
	OsdbResponseFormat      *string                     `json:"osdb:response_format"`
}
