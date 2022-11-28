import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleApiServiceusageV1Service } from "./googleapiserviceusagev1service";
/**
 * Response message for the `ListServices` method.
**/
export declare class ListServicesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    services?: GoogleApiServiceusageV1Service[];
}
