import { SpeakeasyBase } from "../../../internal/utils";
export declare class WikiReadPathParams extends SpeakeasyBase {
    wikiId: string;
}
export declare class WikiReadRequest extends SpeakeasyBase {
    pathParams: WikiReadPathParams;
}
export declare class WikiReadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
