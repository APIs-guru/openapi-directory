import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTokenMetadataOfUtxoPathParams extends SpeakeasyBase {
    tokenid: string;
    utxo: string;
}
export declare class GetTokenMetadataOfUtxoQueryParams extends SpeakeasyBase {
    verbosity?: number;
}
export declare class GetTokenMetadataOfUtxoRequest extends SpeakeasyBase {
    pathParams: GetTokenMetadataOfUtxoPathParams;
    queryParams: GetTokenMetadataOfUtxoQueryParams;
}
export declare class GetTokenMetadataOfUtxoResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
    getTokenMetadataResponse?: shared.GetTokenMetadataResponse;
}
