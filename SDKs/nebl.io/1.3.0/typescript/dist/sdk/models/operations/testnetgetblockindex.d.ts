import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class TestnetGetBlockIndexPathParams extends SpeakeasyBase {
    blockindex: number;
}
export declare class TestnetGetBlockIndexRequest extends SpeakeasyBase {
    pathParams: TestnetGetBlockIndexPathParams;
}
export declare class TestnetGetBlockIndexResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getBlockIndexResponse?: shared.GetBlockIndexResponse;
}
