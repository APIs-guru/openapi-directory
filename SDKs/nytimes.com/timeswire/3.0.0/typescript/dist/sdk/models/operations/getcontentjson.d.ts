import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetContentJsonQueryParams extends SpeakeasyBase {
    url: string;
}
export declare class GetContentJson200ApplicationJson extends SpeakeasyBase {
    copyright?: string;
    numResults?: number;
    results?: shared.Article[];
    status?: string;
}
export declare class GetContentJsonRequest extends SpeakeasyBase {
    queryParams: GetContentJsonQueryParams;
}
export declare class GetContentJsonResponse extends SpeakeasyBase {
    contentType: string;
    getContentJson200ApplicationJsonObject?: GetContentJson200ApplicationJson;
    statusCode: number;
}
