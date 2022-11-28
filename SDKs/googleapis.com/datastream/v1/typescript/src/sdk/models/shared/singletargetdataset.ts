import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SingleTargetDataset
/** 
 * A single target dataset to which all data will be streamed.
**/
export class SingleTargetDataset extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datasetId" })
  datasetId?: string;
}
