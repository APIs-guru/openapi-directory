import { SpeakeasyBase } from "../../../internal/utils";
import { Service } from "./service";
/**
 * The response message for RegistrationService.ListServices.
**/
export declare class ListServicesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    services?: Service[];
}
