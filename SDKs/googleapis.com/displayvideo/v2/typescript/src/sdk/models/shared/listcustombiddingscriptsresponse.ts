import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomBiddingScript } from "./custombiddingscript";



export class ListCustomBiddingScriptsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customBiddingScripts", elemType: CustomBiddingScript })
  customBiddingScripts?: CustomBiddingScript[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
