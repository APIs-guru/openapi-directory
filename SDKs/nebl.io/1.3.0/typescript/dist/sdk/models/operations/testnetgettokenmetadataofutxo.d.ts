import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class TestnetGetTokenMetadataOfUtxoPathParams extends SpeakeasyBase {
    tokenid: string;
    utxo: string;
}
export declare class TestnetGetTokenMetadataOfUtxoQueryParams extends SpeakeasyBase {
    verbosity?: number;
}
export declare class TestnetGetTokenMetadataOfUtxoRequest extends SpeakeasyBase {
    pathParams: TestnetGetTokenMetadataOfUtxoPathParams;
    queryParams: TestnetGetTokenMetadataOfUtxoQueryParams;
}
export declare class TestnetGetTokenMetadataOfUtxoResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
    getTokenMetadataResponse?: shared.GetTokenMetadataResponse;
}
