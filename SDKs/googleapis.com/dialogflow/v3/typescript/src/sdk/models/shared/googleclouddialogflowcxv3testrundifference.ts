import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudDialogflowCxV3TestRunDifferenceTypeEnum {
    DiffTypeUnspecified = "DIFF_TYPE_UNSPECIFIED",
    Intent = "INTENT",
    Page = "PAGE",
    Parameters = "PARAMETERS",
    Utterance = "UTTERANCE"
}


// GoogleCloudDialogflowCxV3TestRunDifference
/** 
 * The description of differences between original and replayed agent output.
**/
export class GoogleCloudDialogflowCxV3TestRunDifference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleCloudDialogflowCxV3TestRunDifferenceTypeEnum;
}
