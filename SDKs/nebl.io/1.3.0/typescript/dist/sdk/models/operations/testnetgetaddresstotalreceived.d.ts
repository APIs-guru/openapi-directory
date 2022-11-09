import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class TestnetGetAddressTotalReceivedPathParams extends SpeakeasyBase {
    address: string;
}
export declare class TestnetGetAddressTotalReceivedRequest extends SpeakeasyBase {
    pathParams: TestnetGetAddressTotalReceivedPathParams;
}
export declare class TestnetGetAddressTotalReceivedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getAddressTotalReceivedResponse?: number;
}
