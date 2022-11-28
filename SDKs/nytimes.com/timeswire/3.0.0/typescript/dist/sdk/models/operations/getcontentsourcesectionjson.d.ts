import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetContentSourceSectionJsonSourceEnum {
    All = "all",
    Nyt = "nyt",
    Iht = "iht"
}
export declare class GetContentSourceSectionJsonPathParams extends SpeakeasyBase {
    section: string;
    source: GetContentSourceSectionJsonSourceEnum;
}
export declare class GetContentSourceSectionJsonQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
export declare class GetContentSourceSectionJson200ApplicationJson extends SpeakeasyBase {
    copyright?: string;
    numResults?: number;
    results?: shared.Article[];
    status?: string;
}
export declare class GetContentSourceSectionJsonRequest extends SpeakeasyBase {
    pathParams: GetContentSourceSectionJsonPathParams;
    queryParams: GetContentSourceSectionJsonQueryParams;
}
export declare class GetContentSourceSectionJsonResponse extends SpeakeasyBase {
    contentType: string;
    getContentSourceSectionJson200ApplicationJsonObject?: GetContentSourceSectionJson200ApplicationJson;
    statusCode: number;
}
