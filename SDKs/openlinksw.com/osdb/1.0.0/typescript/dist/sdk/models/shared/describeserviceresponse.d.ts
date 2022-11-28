import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceDescription } from "./servicedescription";
export declare enum DescribeServiceResponseStatusEnum {
    Success = "success"
}
export declare class DescribeServiceResponse extends SpeakeasyBase {
    api: string;
    method: string;
    response: ServiceDescription;
    status: DescribeServiceResponseStatusEnum;
}
