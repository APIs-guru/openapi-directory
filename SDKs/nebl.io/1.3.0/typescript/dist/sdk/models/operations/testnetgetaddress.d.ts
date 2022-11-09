import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class TestnetGetAddressPathParams extends SpeakeasyBase {
    address: string;
}
export declare class TestnetGetAddressRequest extends SpeakeasyBase {
    pathParams: TestnetGetAddressPathParams;
}
export declare class TestnetGetAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getAddressResponse?: shared.GetAddressResponse;
}
