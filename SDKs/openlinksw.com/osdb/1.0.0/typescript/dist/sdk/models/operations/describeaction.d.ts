import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeActionPathParams extends SpeakeasyBase {
    actionId: string;
    serviceId: string;
}
export declare class DescribeActionRequest extends SpeakeasyBase {
    pathParams: DescribeActionPathParams;
}
export declare class DescribeActionResponse extends SpeakeasyBase {
    contentType: string;
    describeActionResponse?: shared.DescribeActionResponse;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
