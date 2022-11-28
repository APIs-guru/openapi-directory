import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDiscoveryengineV1alphaUserInfo
/** 
 * Information of an end user.
**/
export class GoogleCloudDiscoveryengineV1alphaUserInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=userAgent" })
  userAgent?: string;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}
