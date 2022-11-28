import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ExecBodyOsdbOutputTypeEnum {
    UrlOnly = "url_only",
    GenerateRdf = "generate_rdf",
    DisplayRdf = "display_rdf"
}


export class ExecBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action_specific_property1" })
  actionSpecificProperty1?: string;

  @SpeakeasyMetadata({ data: "json, name=action_specific_property2" })
  actionSpecificProperty2?: string;

  @SpeakeasyMetadata({ data: "json, name=osdb:body_data_encoding" })
  osdbBodyDataEncoding?: string;

  @SpeakeasyMetadata({ data: "json, name=osdb:body_data_raw" })
  osdbBodyDataRaw?: string;

  @SpeakeasyMetadata({ data: "json, name=osdb:body_data_src_url" })
  osdbBodyDataSrcUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=osdb:output_type" })
  osdbOutputType?: ExecBodyOsdbOutputTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=osdb:response_format" })
  osdbResponseFormat?: string;
}
