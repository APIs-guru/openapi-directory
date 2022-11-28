import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderDocument } from "./orderdocument";



// OrderDocumentsListResponse
/** 
 * Order document List Response
**/
export class OrderDocumentsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=orderDocuments", elemType: OrderDocument })
  orderDocuments?: OrderDocument[];
}
