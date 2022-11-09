import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRecommenderV1beta1Operation } from "./googlecloudrecommenderv1beta1operation";


// GoogleCloudRecommenderV1beta1OperationGroup
/** 
 * Group of operations that need to be performed atomically.
**/
export class GoogleCloudRecommenderV1beta1OperationGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=operations", elemType: shared.GoogleCloudRecommenderV1beta1Operation })
  operations?: GoogleCloudRecommenderV1beta1Operation[];
}
