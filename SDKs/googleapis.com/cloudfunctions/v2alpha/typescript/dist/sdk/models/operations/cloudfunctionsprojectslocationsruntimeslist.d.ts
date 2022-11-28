import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudfunctionsProjectsLocationsRuntimesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudfunctionsProjectsLocationsRuntimesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudfunctionsProjectsLocationsRuntimesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudfunctionsProjectsLocationsRuntimesListRequest extends SpeakeasyBase {
    pathParams: CloudfunctionsProjectsLocationsRuntimesListPathParams;
    queryParams: CloudfunctionsProjectsLocationsRuntimesListQueryParams;
    security: CloudfunctionsProjectsLocationsRuntimesListSecurity;
}
export declare class CloudfunctionsProjectsLocationsRuntimesListResponse extends SpeakeasyBase {
    contentType: string;
    listRuntimesResponse?: shared.ListRuntimesResponse;
    statusCode: number;
}
