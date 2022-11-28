import { SpeakeasyBase } from "../../../internal/utils";
import { CustomBiddingScript } from "./custombiddingscript";
export declare class ListCustomBiddingScriptsResponse extends SpeakeasyBase {
    customBiddingScripts?: CustomBiddingScript[];
    nextPageToken?: string;
}
