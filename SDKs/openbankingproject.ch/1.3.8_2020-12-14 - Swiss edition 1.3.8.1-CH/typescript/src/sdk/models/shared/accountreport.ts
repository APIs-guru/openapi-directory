import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { Transactions } from "./transactions";



// AccountReport
/** 
 * JSON based account report.
 * This account report contains transactions resulting from the query parameters.
 * 
 * 'booked' shall be contained if bookingStatus parameter is set to "booked" or "both".
 * 
 * 'pending' is not contained if the bookingStatus parameter is set to "booked" or "information".
 * 
 * 'information' Only contained if the bookingStatus is set to "information" and if supported by ASPSP.
 * 
**/
export class AccountReport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links", elemType: HrefType })
  links: Map<string, HrefType>;

  @SpeakeasyMetadata({ data: "json, name=booked", elemType: Transactions })
  booked?: Transactions[];

  @SpeakeasyMetadata({ data: "json, name=information", elemType: Transactions })
  information?: Transactions[];

  @SpeakeasyMetadata({ data: "json, name=pending", elemType: Transactions })
  pending?: Transactions[];
}
