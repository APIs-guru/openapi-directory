import { SpeakeasyBase } from "../../../internal/utils";
import { Write } from "./write";
/**
 * The request for Firestore.BatchWrite.
**/
export declare class BatchWriteRequest extends SpeakeasyBase {
    labels?: Map<string, string>;
    writes?: Write[];
}
