import { SpeakeasyBase } from "../../../internal/utils";
export declare class WikiContentPathParams extends SpeakeasyBase {
    wikiId: string;
}
export declare class WikiContentRequest extends SpeakeasyBase {
    pathParams: WikiContentPathParams;
}
export declare class WikiContentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
