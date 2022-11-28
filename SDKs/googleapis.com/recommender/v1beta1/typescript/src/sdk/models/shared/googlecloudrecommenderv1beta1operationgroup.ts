import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommenderV1beta1Operation } from "./googlecloudrecommenderv1beta1operation";



// GoogleCloudRecommenderV1beta1OperationGroup
/** 
 * Group of operations that need to be performed atomically.
**/
export class GoogleCloudRecommenderV1beta1OperationGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=operations", elemType: GoogleCloudRecommenderV1beta1Operation })
  operations?: GoogleCloudRecommenderV1beta1Operation[];
}
