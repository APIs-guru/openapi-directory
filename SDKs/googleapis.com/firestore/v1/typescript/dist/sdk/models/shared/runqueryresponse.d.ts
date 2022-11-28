import { SpeakeasyBase } from "../../../internal/utils";
import { Document } from "./document";
/**
 * The response for Firestore.RunQuery.
**/
export declare class RunQueryResponse extends SpeakeasyBase {
    document?: Document;
    done?: boolean;
    readTime?: string;
    skippedResults?: number;
    transaction?: string;
}
