import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudkmsProjectsLocationsKeyRingsImportJobsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudkmsProjectsLocationsKeyRingsImportJobsListQueryParams extends SpeakeasyBase {
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
export declare class CloudkmsProjectsLocationsKeyRingsImportJobsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudkmsProjectsLocationsKeyRingsImportJobsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudkmsProjectsLocationsKeyRingsImportJobsListSecurity extends SpeakeasyBase {
    option1?: CloudkmsProjectsLocationsKeyRingsImportJobsListSecurityOption1;
    option2?: CloudkmsProjectsLocationsKeyRingsImportJobsListSecurityOption2;
}
export declare class CloudkmsProjectsLocationsKeyRingsImportJobsListRequest extends SpeakeasyBase {
    pathParams: CloudkmsProjectsLocationsKeyRingsImportJobsListPathParams;
    queryParams: CloudkmsProjectsLocationsKeyRingsImportJobsListQueryParams;
    security: CloudkmsProjectsLocationsKeyRingsImportJobsListSecurity;
}
export declare class CloudkmsProjectsLocationsKeyRingsImportJobsListResponse extends SpeakeasyBase {
    contentType: string;
    listImportJobsResponse?: shared.ListImportJobsResponse;
    statusCode: number;
}
