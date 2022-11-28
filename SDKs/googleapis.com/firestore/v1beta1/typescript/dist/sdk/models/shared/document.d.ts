import { SpeakeasyBase } from "../../../internal/utils";
import { Value } from "./value";
/**
 * A Firestore document. Must not exceed 1 MiB - 4 bytes.
**/
export declare class Document extends SpeakeasyBase {
    createTime?: string;
    fields?: Map<string, Value>;
    name?: string;
    updateTime?: string;
}
