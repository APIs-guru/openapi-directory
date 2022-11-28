import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TestnetGetTokenHoldersPathParams extends SpeakeasyBase {
    tokenid: string;
}
export declare class TestnetGetTokenHoldersRequest extends SpeakeasyBase {
    pathParams: TestnetGetTokenHoldersPathParams;
}
export declare class TestnetGetTokenHoldersResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
    getTokenHoldersResponse?: shared.GetTokenHoldersResponse;
}
