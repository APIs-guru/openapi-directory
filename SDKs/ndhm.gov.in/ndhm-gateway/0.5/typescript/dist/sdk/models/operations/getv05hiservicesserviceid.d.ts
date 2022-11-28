import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetV05HiServicesServiceIdPathParams extends SpeakeasyBase {
    serviceId: string;
}
export declare class GetV05HiServicesServiceIdHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class GetV05HiServicesServiceIdRequest extends SpeakeasyBase {
    pathParams: GetV05HiServicesServiceIdPathParams;
    headers: GetV05HiServicesServiceIdHeaders;
}
export declare class GetV05HiServicesServiceIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    serviceProfileResponse?: shared.ServiceProfileResponse;
    statusCode: number;
}
