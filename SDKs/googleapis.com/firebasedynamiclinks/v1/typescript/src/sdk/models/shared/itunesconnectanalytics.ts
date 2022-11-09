import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ITunesConnectAnalytics
/** 
 * Parameters for iTunes Connect App Analytics.
**/
export class ITunesConnectAnalytics extends SpeakeasyBase {
  @Metadata({ data: "json, name=at" })
  at?: string;

  @Metadata({ data: "json, name=ct" })
  ct?: string;

  @Metadata({ data: "json, name=mt" })
  mt?: string;

  @Metadata({ data: "json, name=pt" })
  pt?: string;
}
