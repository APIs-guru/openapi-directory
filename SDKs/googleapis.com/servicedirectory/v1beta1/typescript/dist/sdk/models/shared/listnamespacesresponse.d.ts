import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Namespace } from "./namespace";
/**
 * The response message for RegistrationService.ListNamespaces.
**/
export declare class ListNamespacesResponse extends SpeakeasyBase {
    namespaces?: Namespace[];
    nextPageToken?: string;
}
