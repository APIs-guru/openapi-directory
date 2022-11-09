import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudDialogflowCxV3beta1TestRunDifferenceTypeEnum {
    DiffTypeUnspecified = "DIFF_TYPE_UNSPECIFIED"
,    Intent = "INTENT"
,    Page = "PAGE"
,    Parameters = "PARAMETERS"
,    Utterance = "UTTERANCE"
}


// GoogleCloudDialogflowCxV3beta1TestRunDifference
/** 
 * The description of differences between original and replayed agent output.
**/
export class GoogleCloudDialogflowCxV3beta1TestRunDifference extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=type" })
  type?: GoogleCloudDialogflowCxV3beta1TestRunDifferenceTypeEnum;
}
