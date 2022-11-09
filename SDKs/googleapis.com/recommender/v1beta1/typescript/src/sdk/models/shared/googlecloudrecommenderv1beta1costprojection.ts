import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleTypeMoney } from "./googletypemoney";


// GoogleCloudRecommenderV1beta1CostProjection
/** 
 * Contains metadata about how much money a recommendation can save or incur.
**/
export class GoogleCloudRecommenderV1beta1CostProjection extends SpeakeasyBase {
  @Metadata({ data: "json, name=cost" })
  cost?: GoogleTypeMoney;

  @Metadata({ data: "json, name=duration" })
  duration?: string;
}
