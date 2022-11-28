import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeServicePathParams extends SpeakeasyBase {
    serviceId: string;
}
export declare class DescribeServiceRequest extends SpeakeasyBase {
    pathParams: DescribeServicePathParams;
}
export declare class DescribeServiceResponse extends SpeakeasyBase {
    contentType: string;
    describeServiceResponse?: shared.DescribeServiceResponse;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}
