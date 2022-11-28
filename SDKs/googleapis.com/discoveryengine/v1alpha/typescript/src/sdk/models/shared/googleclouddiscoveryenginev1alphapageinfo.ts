import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDiscoveryengineV1alphaPageInfo
/** 
 * Detailed page information.
**/
export class GoogleCloudDiscoveryengineV1alphaPageInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pageCategory" })
  pageCategory?: string;

  @SpeakeasyMetadata({ data: "json, name=pageviewId" })
  pageviewId?: string;

  @SpeakeasyMetadata({ data: "json, name=referrerUri" })
  referrerUri?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
