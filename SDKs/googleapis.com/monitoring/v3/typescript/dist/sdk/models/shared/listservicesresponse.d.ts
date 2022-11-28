import { SpeakeasyBase } from "../../../internal/utils";
import { Service } from "./service";
/**
 * The ListServices response.
**/
export declare class ListServicesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    services?: Service[];
}
