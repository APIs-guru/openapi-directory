import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GooglePrivacyDlpV2SummaryResultCodeEnum {
    TransformationResultCodeUnspecified = "TRANSFORMATION_RESULT_CODE_UNSPECIFIED",
    Success = "SUCCESS",
    Error = "ERROR"
}


// GooglePrivacyDlpV2SummaryResult
/** 
 * A collection that informs the user the number of times a particular `TransformationResultCode` and error details occurred.
**/
export class GooglePrivacyDlpV2SummaryResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: GooglePrivacyDlpV2SummaryResultCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: string;

  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: string;
}
