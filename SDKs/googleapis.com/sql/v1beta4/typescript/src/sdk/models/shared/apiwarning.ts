import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ApiWarningCodeEnum {
    SqlApiWarningCodeUnspecified = "SQL_API_WARNING_CODE_UNSPECIFIED"
,    RegionUnreachable = "REGION_UNREACHABLE"
,    MaxResultsExceedsLimit = "MAX_RESULTS_EXCEEDS_LIMIT"
}


// ApiWarning
/** 
 * An Admin API warning message.
**/
export class ApiWarning extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: ApiWarningCodeEnum;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;
}
