import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Service } from "./service";
/**
 * Response message for DataprocMetastore.ListServices.
**/
export declare class ListServicesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    services?: Service[];
    unreachable?: string[];
}
