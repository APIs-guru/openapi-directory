import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RunProjectsLocationsServicesRevisionsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class RunProjectsLocationsServicesRevisionsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class RunProjectsLocationsServicesRevisionsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RunProjectsLocationsServicesRevisionsGetRequest extends SpeakeasyBase {
    pathParams: RunProjectsLocationsServicesRevisionsGetPathParams;
    queryParams: RunProjectsLocationsServicesRevisionsGetQueryParams;
    security: RunProjectsLocationsServicesRevisionsGetSecurity;
}
export declare class RunProjectsLocationsServicesRevisionsGetResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudRunV2Revision?: shared.GoogleCloudRunV2Revision;
    statusCode: number;
}
