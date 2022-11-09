import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetBlockPathParams extends SpeakeasyBase {
    blockhash: string;
}
export declare class GetBlockRequest extends SpeakeasyBase {
    pathParams: GetBlockPathParams;
}
export declare class GetBlockResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getBlockResponse?: shared.GetBlockResponse;
}
