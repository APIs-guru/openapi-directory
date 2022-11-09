import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetBlockIndexPathParams extends SpeakeasyBase {
    blockindex: number;
}
export declare class GetBlockIndexRequest extends SpeakeasyBase {
    pathParams: GetBlockIndexPathParams;
}
export declare class GetBlockIndexResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getBlockIndexResponse?: shared.GetBlockIndexResponse;
}
