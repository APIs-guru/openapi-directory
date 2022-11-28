import { SpeakeasyBase } from "../../../internal/utils";
import { Service } from "./service";
/**
 * Response message for the `ListServices` method.
**/
export declare class ListServicesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    services?: Service[];
}
