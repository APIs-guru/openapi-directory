import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2InputDataset
/** 
 * InputDataset used to create model or do evaluation. NextID:5
**/
export class GoogleCloudDialogflowV2InputDataset extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataset" })
  dataset?: string;
}
