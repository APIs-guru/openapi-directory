import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LandingPage } from "./landingpage";


// AdvertiserLandingPagesListResponse
/** 
 * Landing Page List Response
**/
export class AdvertiserLandingPagesListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=landingPages", elemType: shared.LandingPage })
  landingPages?: LandingPage[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
