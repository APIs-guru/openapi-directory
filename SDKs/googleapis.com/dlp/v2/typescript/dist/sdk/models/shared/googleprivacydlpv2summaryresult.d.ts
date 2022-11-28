import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GooglePrivacyDlpV2SummaryResultCodeEnum {
    TransformationResultCodeUnspecified = "TRANSFORMATION_RESULT_CODE_UNSPECIFIED",
    Success = "SUCCESS",
    Error = "ERROR"
}
/**
 * A collection that informs the user the number of times a particular `TransformationResultCode` and error details occurred.
**/
export declare class GooglePrivacyDlpV2SummaryResult extends SpeakeasyBase {
    code?: GooglePrivacyDlpV2SummaryResultCodeEnum;
    count?: string;
    details?: string;
}
