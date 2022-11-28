import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudDialogflowCxV3beta1TestRunDifferenceTypeEnum {
    DiffTypeUnspecified = "DIFF_TYPE_UNSPECIFIED",
    Intent = "INTENT",
    Page = "PAGE",
    Parameters = "PARAMETERS",
    Utterance = "UTTERANCE"
}


// GoogleCloudDialogflowCxV3beta1TestRunDifference
/** 
 * The description of differences between original and replayed agent output.
**/
export class GoogleCloudDialogflowCxV3beta1TestRunDifference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleCloudDialogflowCxV3beta1TestRunDifferenceTypeEnum;
}
