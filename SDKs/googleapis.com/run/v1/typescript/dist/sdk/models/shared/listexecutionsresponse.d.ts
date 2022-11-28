import { SpeakeasyBase } from "../../../internal/utils";
import { Execution } from "./execution";
import { ListMeta } from "./listmeta";
/**
 * ListExecutionsResponse is a list of Executions resources.
**/
export declare class ListExecutionsResponse extends SpeakeasyBase {
    apiVersion?: string;
    items?: Execution[];
    kind?: string;
    metadata?: ListMeta;
    unreachable?: string[];
}
