import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MetastoreProjectsLocationsServicesRestorePathParams extends SpeakeasyBase {
    service: string;
}
export declare class MetastoreProjectsLocationsServicesRestoreQueryParams extends SpeakeasyBase {
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
export declare class MetastoreProjectsLocationsServicesRestoreSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MetastoreProjectsLocationsServicesRestoreRequest extends SpeakeasyBase {
    pathParams: MetastoreProjectsLocationsServicesRestorePathParams;
    queryParams: MetastoreProjectsLocationsServicesRestoreQueryParams;
    request?: shared.RestoreServiceRequest;
    security: MetastoreProjectsLocationsServicesRestoreSecurity;
}
export declare class MetastoreProjectsLocationsServicesRestoreResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
