import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ThirdPartyLinkSnippet } from "./thirdpartylinksnippet";
import { ThirdPartyLinkStatus } from "./thirdpartylinkstatus";


// ThirdPartyLink
/** 
 * A *third party account link* resource represents a link between a YouTube account or a channel and an account on a third-party service.
**/
export class ThirdPartyLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=linkingToken" })
  linkingToken?: string;

  @Metadata({ data: "json, name=snippet" })
  snippet?: ThirdPartyLinkSnippet;

  @Metadata({ data: "json, name=status" })
  status?: ThirdPartyLinkStatus;
}
