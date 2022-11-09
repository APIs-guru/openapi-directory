import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HrefType } from "./hreftype";
import { Transactions } from "./transactions";
import { Transactions } from "./transactions";
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
  @Metadata({ data: "json, name=_links", elemType: shared.HrefType })
  links: Map<string, HrefType>;

  @Metadata({ data: "json, name=booked", elemType: shared.Transactions })
  booked?: Transactions[];

  @Metadata({ data: "json, name=information", elemType: shared.Transactions })
  information?: Transactions[];

  @Metadata({ data: "json, name=pending", elemType: shared.Transactions })
  pending?: Transactions[];
}
