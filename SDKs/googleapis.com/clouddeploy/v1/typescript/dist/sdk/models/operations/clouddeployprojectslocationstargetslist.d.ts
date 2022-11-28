import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClouddeployProjectsLocationsTargetsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ClouddeployProjectsLocationsTargetsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ClouddeployProjectsLocationsTargetsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClouddeployProjectsLocationsTargetsListRequest extends SpeakeasyBase {
    pathParams: ClouddeployProjectsLocationsTargetsListPathParams;
    queryParams: ClouddeployProjectsLocationsTargetsListQueryParams;
    security: ClouddeployProjectsLocationsTargetsListSecurity;
}
export declare class ClouddeployProjectsLocationsTargetsListResponse extends SpeakeasyBase {
    contentType: string;
    listTargetsResponse?: shared.ListTargetsResponse;
    statusCode: number;
}
