import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ExecBodyOsdbOutputTypeEnum {
    UrlOnly = "url_only",
    GenerateRdf = "generate_rdf",
    DisplayRdf = "display_rdf"
}
export declare class ExecBody extends SpeakeasyBase {
    actionSpecificProperty1?: string;
    actionSpecificProperty2?: string;
    osdbBodyDataEncoding?: string;
    osdbBodyDataRaw?: string;
    osdbBodyDataSrcUrl?: string;
    osdbOutputType?: ExecBodyOsdbOutputTypeEnum;
    osdbResponseFormat?: string;
}
