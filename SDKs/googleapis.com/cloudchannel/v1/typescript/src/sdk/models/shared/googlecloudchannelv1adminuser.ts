import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudChannelV1AdminUser
/** 
 * Information needed to create an Admin User for Google Workspace.
**/
export class GoogleCloudChannelV1AdminUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=familyName" })
  familyName?: string;

  @SpeakeasyMetadata({ data: "json, name=givenName" })
  givenName?: string;
}
