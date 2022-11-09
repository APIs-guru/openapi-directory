import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class TestnetGetBlockPathParams extends SpeakeasyBase {
    blockhash: string;
}
export declare class TestnetGetBlockRequest extends SpeakeasyBase {
    pathParams: TestnetGetBlockPathParams;
}
export declare class TestnetGetBlockResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getBlockResponse?: shared.GetBlockResponse;
}
