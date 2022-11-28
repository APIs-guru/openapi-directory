import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TestnetGetAddressUtxosPathParams extends SpeakeasyBase {
    address: string;
}
export declare class TestnetGetAddressUtxosRequest extends SpeakeasyBase {
    pathParams: TestnetGetAddressUtxosPathParams;
}
export declare class TestnetGetAddressUtxosResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getAddressUtxosResponse?: shared.GetAddressUtxosResponse[];
}
