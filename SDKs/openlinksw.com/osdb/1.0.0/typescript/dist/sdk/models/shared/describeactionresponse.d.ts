import { SpeakeasyBase } from "../../../internal/utils";
import { ActionDescription } from "./actiondescription";
export declare enum DescribeActionResponseStatusEnum {
    Success = "success"
}
export declare class DescribeActionResponse extends SpeakeasyBase {
    api: string;
    method: string;
    response: ActionDescription;
    status: DescribeActionResponseStatusEnum;
}
