import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class TestnetGetTxsQueryParams extends SpeakeasyBase {
    address?: string;
    block?: string;
    pageNum?: number;
}
export declare class TestnetGetTxsRequest extends SpeakeasyBase {
    queryParams: TestnetGetTxsQueryParams;
}
export declare class TestnetGetTxsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getTxsResponse?: shared.GetTxsResponse;
}
