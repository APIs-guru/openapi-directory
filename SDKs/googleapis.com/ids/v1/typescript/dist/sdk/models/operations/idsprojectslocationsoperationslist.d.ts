import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IdsProjectsLocationsOperationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class IdsProjectsLocationsOperationsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class IdsProjectsLocationsOperationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IdsProjectsLocationsOperationsListRequest extends SpeakeasyBase {
    pathParams: IdsProjectsLocationsOperationsListPathParams;
    queryParams: IdsProjectsLocationsOperationsListQueryParams;
    security: IdsProjectsLocationsOperationsListSecurity;
}
export declare class IdsProjectsLocationsOperationsListResponse extends SpeakeasyBase {
    contentType: string;
    listOperationsResponse?: shared.ListOperationsResponse;
    statusCode: number;
}
