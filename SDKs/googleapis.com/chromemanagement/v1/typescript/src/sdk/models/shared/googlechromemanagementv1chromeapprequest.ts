import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleChromeManagementV1ChromeAppRequest
/** 
 * Details of an app installation request.
**/
export class GoogleChromeManagementV1ChromeAppRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appDetails" })
  appDetails?: string;

  @SpeakeasyMetadata({ data: "json, name=appId" })
  appId?: string;

  @SpeakeasyMetadata({ data: "json, name=detailUri" })
  detailUri?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=iconUri" })
  iconUri?: string;

  @SpeakeasyMetadata({ data: "json, name=latestRequestTime" })
  latestRequestTime?: string;

  @SpeakeasyMetadata({ data: "json, name=requestCount" })
  requestCount?: string;
}
