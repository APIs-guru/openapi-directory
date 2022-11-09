import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetTxsQueryParams extends SpeakeasyBase {
    address?: string;
    block?: string;
    pageNum?: number;
}
export declare class GetTxsRequest extends SpeakeasyBase {
    queryParams: GetTxsQueryParams;
}
export declare class GetTxsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getTxsResponse?: shared.GetTxsResponse;
}
