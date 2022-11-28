import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TestnetGetTokenMetadataPathParams extends SpeakeasyBase {
    tokenid: string;
}
export declare class TestnetGetTokenMetadataQueryParams extends SpeakeasyBase {
    verbosity?: number;
}
export declare class TestnetGetTokenMetadataRequest extends SpeakeasyBase {
    pathParams: TestnetGetTokenMetadataPathParams;
    queryParams: TestnetGetTokenMetadataQueryParams;
}
export declare class TestnetGetTokenMetadataResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
    getTokenMetadataResponse?: shared.GetTokenMetadataResponse;
}
