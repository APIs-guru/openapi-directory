import { SpeakeasyBase } from "../../../internal/utils";
import { MobileApp } from "./mobileapp";
/**
 * Mobile app List Response
**/
export declare class MobileAppsListResponse extends SpeakeasyBase {
    kind?: string;
    mobileApps?: MobileApp[];
    nextPageToken?: string;
}
