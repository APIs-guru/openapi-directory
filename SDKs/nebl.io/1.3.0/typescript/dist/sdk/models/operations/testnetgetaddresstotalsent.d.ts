import { SpeakeasyBase } from "../../../internal/utils";
export declare class TestnetGetAddressTotalSentPathParams extends SpeakeasyBase {
    address: string;
}
export declare class TestnetGetAddressTotalSentRequest extends SpeakeasyBase {
    pathParams: TestnetGetAddressTotalSentPathParams;
}
export declare class TestnetGetAddressTotalSentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getAddressTotalSentResponse?: number;
}
