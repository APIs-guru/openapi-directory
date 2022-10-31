package shared




type ExecBodyOsdbOutputTypeEnum string

const (
    ExecBodyOsdbOutputTypeEnumURLOnly ExecBodyOsdbOutputTypeEnum = "url_only"
ExecBodyOsdbOutputTypeEnumGenerateRdf ExecBodyOsdbOutputTypeEnum = "generate_rdf"
ExecBodyOsdbOutputTypeEnumDisplayRdf ExecBodyOsdbOutputTypeEnum = "display_rdf"
)


type ExecBody struct {
    ActionSpecificProperty1 *string `json:"action_specific_property1,omitempty"`
    ActionSpecificProperty2 *string `json:"action_specific_property2,omitempty"`
    OsdbBodyDataEncoding *string `json:"osdb:body_data_encoding,omitempty"`
    OsdbBodyDataRaw *string `json:"osdb:body_data_raw,omitempty"`
    OsdbBodyDataSrcURL *string `json:"osdb:body_data_src_url,omitempty"`
    OsdbOutputType *ExecBodyOsdbOutputTypeEnum `json:"osdb:output_type,omitempty"`
    OsdbResponseFormat *string `json:"osdb:response_format,omitempty"`
    
}

