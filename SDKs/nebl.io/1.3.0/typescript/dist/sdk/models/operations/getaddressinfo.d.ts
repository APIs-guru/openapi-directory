import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetAddressInfoPathParams extends SpeakeasyBase {
    address: string;
}
export declare class GetAddressInfoRequest extends SpeakeasyBase {
    pathParams: GetAddressInfoPathParams;
}
export declare class GetAddressInfoResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
    getAddressInfoResponse?: shared.GetAddressInfoResponse;
}
