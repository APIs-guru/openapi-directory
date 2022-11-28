import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTaggedObjectsPathParams extends SpeakeasyBase {
    label: string;
}
export declare class GetTaggedObjectsQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class GetTaggedObjectsSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetTaggedObjectsDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetTaggedObjectsRequest extends SpeakeasyBase {
    pathParams: GetTaggedObjectsPathParams;
    queryParams: GetTaggedObjectsQueryParams;
    security: GetTaggedObjectsSecurity;
}
export declare class GetTaggedObjectsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getTaggedObjects200ApplicationJsonAny?: any;
    getTaggedObjectsDefaultApplicationJsonObject?: GetTaggedObjectsDefaultApplicationJson;
}
