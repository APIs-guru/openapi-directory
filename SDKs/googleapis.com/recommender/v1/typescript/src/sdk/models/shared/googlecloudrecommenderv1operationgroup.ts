import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRecommenderV1Operation } from "./googlecloudrecommenderv1operation";


// GoogleCloudRecommenderV1OperationGroup
/** 
 * Group of operations that need to be performed atomically.
**/
export class GoogleCloudRecommenderV1OperationGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=operations", elemType: shared.GoogleCloudRecommenderV1Operation })
  operations?: GoogleCloudRecommenderV1Operation[];
}
