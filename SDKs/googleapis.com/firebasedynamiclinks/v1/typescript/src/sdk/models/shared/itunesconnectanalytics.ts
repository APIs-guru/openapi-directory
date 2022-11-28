import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ITunesConnectAnalytics
/** 
 * Parameters for iTunes Connect App Analytics.
**/
export class ITunesConnectAnalytics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=at" })
  at?: string;

  @SpeakeasyMetadata({ data: "json, name=ct" })
  ct?: string;

  @SpeakeasyMetadata({ data: "json, name=mt" })
  mt?: string;

  @SpeakeasyMetadata({ data: "json, name=pt" })
  pt?: string;
}
