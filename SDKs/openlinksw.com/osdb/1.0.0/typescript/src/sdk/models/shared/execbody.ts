import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ExecBodyOsdbOutputTypeEnum {
    UrlOnly = "url_only"
,    GenerateRdf = "generate_rdf"
,    DisplayRdf = "display_rdf"
}


export class ExecBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=action_specific_property1" })
  actionSpecificProperty1?: string;

  @Metadata({ data: "json, name=action_specific_property2" })
  actionSpecificProperty2?: string;

  @Metadata({ data: "json, name=osdb:body_data_encoding" })
  osdbBodyDataEncoding?: string;

  @Metadata({ data: "json, name=osdb:body_data_raw" })
  osdbBodyDataRaw?: string;

  @Metadata({ data: "json, name=osdb:body_data_src_url" })
  osdbBodyDataSrcUrl?: string;

  @Metadata({ data: "json, name=osdb:output_type" })
  osdbOutputType?: ExecBodyOsdbOutputTypeEnum;

  @Metadata({ data: "json, name=osdb:response_format" })
  osdbResponseFormat?: string;
}
