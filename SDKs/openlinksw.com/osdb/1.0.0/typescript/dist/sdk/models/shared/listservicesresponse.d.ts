import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceDescription } from "./servicedescription";
export declare enum ListServicesResponseStatusEnum {
    Success = "success"
}
export declare class ListServicesResponse extends SpeakeasyBase {
    api: string;
    method: string;
    response: ServiceDescription[];
    status: ListServicesResponseStatusEnum;
}
