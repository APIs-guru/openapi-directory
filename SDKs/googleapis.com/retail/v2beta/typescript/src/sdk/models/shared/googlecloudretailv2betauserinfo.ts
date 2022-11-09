import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRetailV2betaUserInfo
/** 
 * Information of an end user.
**/
export class GoogleCloudRetailV2betaUserInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=directUserRequest" })
  directUserRequest?: boolean;

  @Metadata({ data: "json, name=ipAddress" })
  ipAddress?: string;

  @Metadata({ data: "json, name=userAgent" })
  userAgent?: string;

  @Metadata({ data: "json, name=userId" })
  userId?: string;
}
