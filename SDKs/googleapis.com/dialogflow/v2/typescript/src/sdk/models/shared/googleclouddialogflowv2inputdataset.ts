import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2InputDataset
/** 
 * InputDataset used to create model or do evaluation. NextID:5
**/
export class GoogleCloudDialogflowV2InputDataset extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataset" })
  dataset?: string;
}
