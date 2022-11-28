import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LandingPage } from "./landingpage";



// AdvertiserLandingPagesListResponse
/** 
 * Landing Page List Response
**/
export class AdvertiserLandingPagesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=landingPages", elemType: LandingPage })
  landingPages?: LandingPage[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
