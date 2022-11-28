import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDiscoveryengineV1betaPageInfo
/** 
 * Detailed page information.
**/
export class GoogleCloudDiscoveryengineV1betaPageInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pageCategory" })
  pageCategory?: string;

  @SpeakeasyMetadata({ data: "json, name=pageviewId" })
  pageviewId?: string;

  @SpeakeasyMetadata({ data: "json, name=referrerUri" })
  referrerUri?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
