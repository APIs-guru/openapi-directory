import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class TestnetGetAddressInfoPathParams extends SpeakeasyBase {
    address: string;
}
export declare class TestnetGetAddressInfoRequest extends SpeakeasyBase {
    pathParams: TestnetGetAddressInfoPathParams;
}
export declare class TestnetGetAddressInfoResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
    getAddressInfoResponse?: shared.GetAddressInfoResponse;
}
