import { SpeakeasyBase } from "../../../internal/utils";
import { OrderDocument } from "./orderdocument";
/**
 * Order document List Response
**/
export declare class OrderDocumentsListResponse extends SpeakeasyBase {
    kind?: string;
    nextPageToken?: string;
    orderDocuments?: OrderDocument[];
}
