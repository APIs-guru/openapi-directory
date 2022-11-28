import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeMoney } from "./googletypemoney";



// GoogleCloudRecommenderV1CostProjection
/** 
 * Contains metadata about how much money a recommendation can save or incur.
**/
export class GoogleCloudRecommenderV1CostProjection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cost" })
  cost?: GoogleTypeMoney;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: string;
}
