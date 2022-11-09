import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CustomBiddingScript } from "./custombiddingscript";


export class ListCustomBiddingScriptsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=customBiddingScripts", elemType: shared.CustomBiddingScript })
  customBiddingScripts?: CustomBiddingScript[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
