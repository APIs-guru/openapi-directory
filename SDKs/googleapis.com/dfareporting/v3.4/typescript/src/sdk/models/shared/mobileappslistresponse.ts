import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MobileApp } from "./mobileapp";



// MobileAppsListResponse
/** 
 * Mobile app List Response
**/
export class MobileAppsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=mobileApps", elemType: MobileApp })
  mobileApps?: MobileApp[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
