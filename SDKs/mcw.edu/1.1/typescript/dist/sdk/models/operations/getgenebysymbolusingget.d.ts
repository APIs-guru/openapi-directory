import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetGeneBySymbolUsingGetPathParams extends SpeakeasyBase {
    speciesTypeKey: number;
    symbol: string;
}
export declare class GetGeneBySymbolUsingGetRequest extends SpeakeasyBase {
    pathParams: GetGeneBySymbolUsingGetPathParams;
}
export declare class GetGeneBySymbolUsingGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
