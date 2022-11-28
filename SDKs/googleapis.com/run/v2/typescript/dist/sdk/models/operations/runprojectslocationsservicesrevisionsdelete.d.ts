import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RunProjectsLocationsServicesRevisionsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class RunProjectsLocationsServicesRevisionsDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    etag?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    validateOnly?: boolean;
}
export declare class RunProjectsLocationsServicesRevisionsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RunProjectsLocationsServicesRevisionsDeleteRequest extends SpeakeasyBase {
    pathParams: RunProjectsLocationsServicesRevisionsDeletePathParams;
    queryParams: RunProjectsLocationsServicesRevisionsDeleteQueryParams;
    security: RunProjectsLocationsServicesRevisionsDeleteSecurity;
}
export declare class RunProjectsLocationsServicesRevisionsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
