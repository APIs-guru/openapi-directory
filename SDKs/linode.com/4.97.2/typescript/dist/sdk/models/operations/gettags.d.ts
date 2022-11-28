import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTagsQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class GetTagsSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetTags200ApplicationJson extends SpeakeasyBase {
    data?: shared.Tag[];
    page?: number;
    pages?: number;
    results?: number;
}
export declare class GetTagsDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetTagsRequest extends SpeakeasyBase {
    queryParams: GetTagsQueryParams;
    security: GetTagsSecurity;
}
export declare class GetTagsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getTags200ApplicationJsonObject?: GetTags200ApplicationJson;
    getTagsDefaultApplicationJsonObject?: GetTagsDefaultApplicationJson;
}
