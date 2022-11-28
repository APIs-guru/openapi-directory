import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1DataQualityRule } from "./googleclouddataplexv1dataqualityrule";



// GoogleCloudDataplexV1DataQualitySpec
/** 
 * DataQualityScan related setting.
**/
export class GoogleCloudDataplexV1DataQualitySpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rules", elemType: GoogleCloudDataplexV1DataQualityRule })
  rules?: GoogleCloudDataplexV1DataQualityRule[];
}
