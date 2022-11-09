import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Diagnostics } from "./diagnostics";
/**
 * Response that contains the requested diagnostics.
**/
export declare class ListDiagnosticsResponse extends SpeakeasyBase {
    diagnostics?: Diagnostics[];
    nextPageToken?: string;
}
