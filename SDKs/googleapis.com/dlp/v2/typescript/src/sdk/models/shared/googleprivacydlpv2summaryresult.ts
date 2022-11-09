import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GooglePrivacyDlpV2SummaryResultCodeEnum {
    TransformationResultCodeUnspecified = "TRANSFORMATION_RESULT_CODE_UNSPECIFIED"
,    Success = "SUCCESS"
,    Error = "ERROR"
}


// GooglePrivacyDlpV2SummaryResult
/** 
 * A collection that informs the user the number of times a particular `TransformationResultCode` and error details occurred.
**/
export class GooglePrivacyDlpV2SummaryResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: GooglePrivacyDlpV2SummaryResultCodeEnum;

  @Metadata({ data: "json, name=count" })
  count?: string;

  @Metadata({ data: "json, name=details" })
  details?: string;
}
