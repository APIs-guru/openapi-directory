import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRecommendationengineV1beta1UserInfo
/** 
 * Information of end users.
**/
export class GoogleCloudRecommendationengineV1beta1UserInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=directUserRequest" })
  directUserRequest?: boolean;

  @Metadata({ data: "json, name=ipAddress" })
  ipAddress?: string;

  @Metadata({ data: "json, name=userAgent" })
  userAgent?: string;

  @Metadata({ data: "json, name=userId" })
  userId?: string;

  @Metadata({ data: "json, name=visitorId" })
  visitorId?: string;
}
