import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRecommendationengineV1beta1UserInfo
/** 
 * Information of end users.
**/
export class GoogleCloudRecommendationengineV1beta1UserInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=directUserRequest" })
  directUserRequest?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ipAddress" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=userAgent" })
  userAgent?: string;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;

  @SpeakeasyMetadata({ data: "json, name=visitorId" })
  visitorId?: string;
}
