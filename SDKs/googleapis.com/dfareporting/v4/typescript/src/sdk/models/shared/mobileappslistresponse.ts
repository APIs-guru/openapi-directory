import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MobileApp } from "./mobileapp";


// MobileAppsListResponse
/** 
 * Mobile app List Response
**/
export class MobileAppsListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=mobileApps", elemType: shared.MobileApp })
  mobileApps?: MobileApp[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
