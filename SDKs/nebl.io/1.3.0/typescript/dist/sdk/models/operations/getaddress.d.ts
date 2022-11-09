import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetAddressPathParams extends SpeakeasyBase {
    address: string;
}
export declare class GetAddressRequest extends SpeakeasyBase {
    pathParams: GetAddressPathParams;
}
export declare class GetAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getAddressResponse?: shared.GetAddressResponse;
}
