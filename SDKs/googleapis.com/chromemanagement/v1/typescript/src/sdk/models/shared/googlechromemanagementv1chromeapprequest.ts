import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleChromeManagementV1ChromeAppRequest
/** 
 * Details of an app installation request.
**/
export class GoogleChromeManagementV1ChromeAppRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=appDetails" })
  appDetails?: string;

  @Metadata({ data: "json, name=appId" })
  appId?: string;

  @Metadata({ data: "json, name=detailUri" })
  detailUri?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=iconUri" })
  iconUri?: string;

  @Metadata({ data: "json, name=latestRequestTime" })
  latestRequestTime?: string;

  @Metadata({ data: "json, name=requestCount" })
  requestCount?: string;
}
