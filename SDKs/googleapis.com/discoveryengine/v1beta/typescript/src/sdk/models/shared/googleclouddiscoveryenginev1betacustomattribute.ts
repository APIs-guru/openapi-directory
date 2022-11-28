import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDiscoveryengineV1betaCustomAttribute
/** 
 * A custom attribute that is not explicitly modeled in a resource, e.g. UserEvent.
**/
export class GoogleCloudDiscoveryengineV1betaCustomAttribute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=numbers" })
  numbers?: number[];

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string[];
}
