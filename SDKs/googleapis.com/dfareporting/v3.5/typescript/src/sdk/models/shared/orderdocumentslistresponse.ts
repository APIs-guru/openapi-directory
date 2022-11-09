import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OrderDocument } from "./orderdocument";


// OrderDocumentsListResponse
/** 
 * Order document List Response
**/
export class OrderDocumentsListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=orderDocuments", elemType: shared.OrderDocument })
  orderDocuments?: OrderDocument[];
}
