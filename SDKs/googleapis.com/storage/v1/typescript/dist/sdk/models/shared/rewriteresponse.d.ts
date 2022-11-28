import { SpeakeasyBase } from "../../../internal/utils";
import { Object } from "./object";
/**
 * A rewrite response.
**/
export declare class RewriteResponse extends SpeakeasyBase {
    done?: boolean;
    kind?: string;
    objectSize?: string;
    resource?: Object;
    rewriteToken?: string;
    totalBytesRewritten?: string;
}
