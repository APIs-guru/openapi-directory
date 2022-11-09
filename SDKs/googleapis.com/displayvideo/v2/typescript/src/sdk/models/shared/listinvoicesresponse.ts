import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Invoice } from "./invoice";


export class ListInvoicesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=invoices", elemType: shared.Invoice })
  invoices?: Invoice[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
