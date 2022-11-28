import { SpeakeasyBase } from "../../../internal/utils";
export declare class SearchPathwaysUsingGetPathParams extends SpeakeasyBase {
    searchString: string;
}
export declare class SearchPathwaysUsingGetRequest extends SpeakeasyBase {
    pathParams: SearchPathwaysUsingGetPathParams;
}
export declare class SearchPathwaysUsingGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
