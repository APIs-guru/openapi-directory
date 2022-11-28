import { SpeakeasyBase } from "../../../internal/utils";
import { LandingPage } from "./landingpage";
/**
 * Landing Page List Response
**/
export declare class AdvertiserLandingPagesListResponse extends SpeakeasyBase {
    kind?: string;
    landingPages?: LandingPage[];
    nextPageToken?: string;
}
