import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDiscoveryengineV1alphaSearchInfo
/** 
 * Detailed search information.
**/
export class GoogleCloudDiscoveryengineV1alphaSearchInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=orderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "json, name=searchQuery" })
  searchQuery?: string;
}
