import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetGenesByKeywordUsingGetPathParams extends SpeakeasyBase {
    keyword: string;
    speciesTypeKey: number;
}
export declare class GetGenesByKeywordUsingGetRequest extends SpeakeasyBase {
    pathParams: GetGenesByKeywordUsingGetPathParams;
}
export declare class GetGenesByKeywordUsingGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
