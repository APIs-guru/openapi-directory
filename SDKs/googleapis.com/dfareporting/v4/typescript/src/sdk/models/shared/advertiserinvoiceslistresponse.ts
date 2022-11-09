import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Invoice } from "./invoice";


// AdvertiserInvoicesListResponse
/** 
 * Invoice List Response
**/
export class AdvertiserInvoicesListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=invoices", elemType: shared.Invoice })
  invoices?: Invoice[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
