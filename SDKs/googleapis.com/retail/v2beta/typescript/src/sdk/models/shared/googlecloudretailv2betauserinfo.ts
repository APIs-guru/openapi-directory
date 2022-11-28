import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2betaUserInfo
/** 
 * Information of an end user.
**/
export class GoogleCloudRetailV2betaUserInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=directUserRequest" })
  directUserRequest?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ipAddress" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=userAgent" })
  userAgent?: string;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}
