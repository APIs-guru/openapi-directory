import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetGenesByAliasSymbolUsingGetPathParams extends SpeakeasyBase {
    aliasSymbol: string;
    speciesTypeKey: number;
}
export declare class GetGenesByAliasSymbolUsingGetRequest extends SpeakeasyBase {
    pathParams: GetGenesByAliasSymbolUsingGetPathParams;
}
export declare class GetGenesByAliasSymbolUsingGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
