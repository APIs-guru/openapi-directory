import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ApiWarningCodeEnum {
    SqlApiWarningCodeUnspecified = "SQL_API_WARNING_CODE_UNSPECIFIED",
    RegionUnreachable = "REGION_UNREACHABLE",
    MaxResultsExceedsLimit = "MAX_RESULTS_EXCEEDS_LIMIT"
}


// ApiWarning
/** 
 * An Admin API warning message.
**/
export class ApiWarning extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: ApiWarningCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;
}
