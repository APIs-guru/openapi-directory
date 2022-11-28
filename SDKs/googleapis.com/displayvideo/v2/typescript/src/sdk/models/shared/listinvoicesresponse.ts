import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Invoice } from "./invoice";



export class ListInvoicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=invoices", elemType: Invoice })
  invoices?: Invoice[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
