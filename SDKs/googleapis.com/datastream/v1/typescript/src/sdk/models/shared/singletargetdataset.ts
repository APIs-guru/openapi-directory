import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SingleTargetDataset
/** 
 * A single target dataset to which all data will be streamed.
**/
export class SingleTargetDataset extends SpeakeasyBase {
  @Metadata({ data: "json, name=datasetId" })
  datasetId?: string;
}
