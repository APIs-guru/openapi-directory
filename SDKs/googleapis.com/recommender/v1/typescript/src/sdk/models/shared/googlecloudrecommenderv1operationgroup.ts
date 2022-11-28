import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommenderV1Operation } from "./googlecloudrecommenderv1operation";



// GoogleCloudRecommenderV1OperationGroup
/** 
 * Group of operations that need to be performed atomically.
**/
export class GoogleCloudRecommenderV1OperationGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=operations", elemType: GoogleCloudRecommenderV1Operation })
  operations?: GoogleCloudRecommenderV1Operation[];
}
