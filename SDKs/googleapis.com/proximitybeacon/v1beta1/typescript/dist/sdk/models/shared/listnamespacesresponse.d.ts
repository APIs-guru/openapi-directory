import { SpeakeasyBase } from "../../../internal/utils";
import { Namespace } from "./namespace";
/**
 * Response to ListNamespacesRequest that contains all the project's namespaces.
**/
export declare class ListNamespacesResponse extends SpeakeasyBase {
    namespaces?: Namespace[];
}
