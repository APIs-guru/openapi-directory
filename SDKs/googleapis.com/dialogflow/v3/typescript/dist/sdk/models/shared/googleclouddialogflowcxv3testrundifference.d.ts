import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDialogflowCxV3TestRunDifferenceTypeEnum {
    DiffTypeUnspecified = "DIFF_TYPE_UNSPECIFIED",
    Intent = "INTENT",
    Page = "PAGE",
    Parameters = "PARAMETERS",
    Utterance = "UTTERANCE"
}
/**
 * The description of differences between original and replayed agent output.
**/
export declare class GoogleCloudDialogflowCxV3TestRunDifference extends SpeakeasyBase {
    description?: string;
    type?: GoogleCloudDialogflowCxV3TestRunDifferenceTypeEnum;
}
