import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { Transactions } from "./transactions";
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
export declare class AccountReport extends SpeakeasyBase {
    links: Map<string, HrefType>;
    booked?: Transactions[];
    information?: Transactions[];
    pending?: Transactions[];
}
