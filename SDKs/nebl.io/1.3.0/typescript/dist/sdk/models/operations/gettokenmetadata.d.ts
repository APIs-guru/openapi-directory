import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTokenMetadataPathParams extends SpeakeasyBase {
    tokenid: string;
}
export declare class GetTokenMetadataQueryParams extends SpeakeasyBase {
    verbosity?: number;
}
export declare class GetTokenMetadataRequest extends SpeakeasyBase {
    pathParams: GetTokenMetadataPathParams;
    queryParams: GetTokenMetadataQueryParams;
}
export declare class GetTokenMetadataResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
    getTokenMetadataResponse?: shared.GetTokenMetadataResponse;
}
