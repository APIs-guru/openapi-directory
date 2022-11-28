import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Invoice } from "./invoice";



// AdvertiserInvoicesListResponse
/** 
 * Invoice List Response
**/
export class AdvertiserInvoicesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=invoices", elemType: Invoice })
  invoices?: Invoice[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
