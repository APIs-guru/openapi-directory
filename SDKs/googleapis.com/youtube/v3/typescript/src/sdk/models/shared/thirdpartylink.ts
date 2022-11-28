import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ThirdPartyLinkSnippet } from "./thirdpartylinksnippet";
import { ThirdPartyLinkStatus } from "./thirdpartylinkstatus";



// ThirdPartyLink
/** 
 * A *third party account link* resource represents a link between a YouTube account or a channel and an account on a third-party service.
**/
export class ThirdPartyLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=linkingToken" })
  linkingToken?: string;

  @SpeakeasyMetadata({ data: "json, name=snippet" })
  snippet?: ThirdPartyLinkSnippet;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ThirdPartyLinkStatus;
}
