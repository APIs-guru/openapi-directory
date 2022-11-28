import { SpeakeasyBase } from "../../../internal/utils";
import { ThirdPartyLinkSnippet } from "./thirdpartylinksnippet";
import { ThirdPartyLinkStatus } from "./thirdpartylinkstatus";
/**
 * A *third party account link* resource represents a link between a YouTube account or a channel and an account on a third-party service.
**/
export declare class ThirdPartyLink extends SpeakeasyBase {
    etag?: string;
    kind?: string;
    linkingToken?: string;
    snippet?: ThirdPartyLinkSnippet;
    status?: ThirdPartyLinkStatus;
}
