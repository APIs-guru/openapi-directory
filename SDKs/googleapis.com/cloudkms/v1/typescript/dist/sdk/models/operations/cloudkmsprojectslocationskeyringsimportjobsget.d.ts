import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudkmsProjectsLocationsKeyRingsImportJobsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudkmsProjectsLocationsKeyRingsImportJobsGetQueryParams extends SpeakeasyBase {
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
export declare class CloudkmsProjectsLocationsKeyRingsImportJobsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudkmsProjectsLocationsKeyRingsImportJobsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudkmsProjectsLocationsKeyRingsImportJobsGetSecurity extends SpeakeasyBase {
    option1?: CloudkmsProjectsLocationsKeyRingsImportJobsGetSecurityOption1;
    option2?: CloudkmsProjectsLocationsKeyRingsImportJobsGetSecurityOption2;
}
export declare class CloudkmsProjectsLocationsKeyRingsImportJobsGetRequest extends SpeakeasyBase {
    pathParams: CloudkmsProjectsLocationsKeyRingsImportJobsGetPathParams;
    queryParams: CloudkmsProjectsLocationsKeyRingsImportJobsGetQueryParams;
    security: CloudkmsProjectsLocationsKeyRingsImportJobsGetSecurity;
}
export declare class CloudkmsProjectsLocationsKeyRingsImportJobsGetResponse extends SpeakeasyBase {
    contentType: string;
    importJob?: shared.ImportJob;
    statusCode: number;
}
