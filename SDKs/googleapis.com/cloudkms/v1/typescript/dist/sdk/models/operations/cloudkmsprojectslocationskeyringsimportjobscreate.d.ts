import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudkmsProjectsLocationsKeyRingsImportJobsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudkmsProjectsLocationsKeyRingsImportJobsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    importJobId?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudkmsProjectsLocationsKeyRingsImportJobsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudkmsProjectsLocationsKeyRingsImportJobsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudkmsProjectsLocationsKeyRingsImportJobsCreateSecurity extends SpeakeasyBase {
    option1?: CloudkmsProjectsLocationsKeyRingsImportJobsCreateSecurityOption1;
    option2?: CloudkmsProjectsLocationsKeyRingsImportJobsCreateSecurityOption2;
}
export declare class CloudkmsProjectsLocationsKeyRingsImportJobsCreateRequest extends SpeakeasyBase {
    pathParams: CloudkmsProjectsLocationsKeyRingsImportJobsCreatePathParams;
    queryParams: CloudkmsProjectsLocationsKeyRingsImportJobsCreateQueryParams;
    request?: shared.ImportJobInput;
    security: CloudkmsProjectsLocationsKeyRingsImportJobsCreateSecurity;
}
export declare class CloudkmsProjectsLocationsKeyRingsImportJobsCreateResponse extends SpeakeasyBase {
    contentType: string;
    importJob?: shared.ImportJob;
    statusCode: number;
}
