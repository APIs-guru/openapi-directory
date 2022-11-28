import { SpeakeasyBase } from "../../../internal/utils";
import { ManagedService } from "./managedservice";
/**
 * Response message for `ListServices` method.
**/
export declare class ListServicesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    services?: ManagedService[];
}
