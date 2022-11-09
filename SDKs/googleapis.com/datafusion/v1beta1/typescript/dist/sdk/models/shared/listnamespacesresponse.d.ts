import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Namespace } from "./namespace";
/**
 * List namespaces response.
**/
export declare class ListNamespacesResponse extends SpeakeasyBase {
    namespaces?: Namespace[];
    nextPageToken?: string;
}
