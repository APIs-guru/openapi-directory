import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudkmsProjectsLocationsKeyRingsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudkmsProjectsLocationsKeyRingsListQueryParams extends SpeakeasyBase {
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
export declare class CloudkmsProjectsLocationsKeyRingsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudkmsProjectsLocationsKeyRingsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudkmsProjectsLocationsKeyRingsListSecurity extends SpeakeasyBase {
    option1?: CloudkmsProjectsLocationsKeyRingsListSecurityOption1;
    option2?: CloudkmsProjectsLocationsKeyRingsListSecurityOption2;
}
export declare class CloudkmsProjectsLocationsKeyRingsListRequest extends SpeakeasyBase {
    pathParams: CloudkmsProjectsLocationsKeyRingsListPathParams;
    queryParams: CloudkmsProjectsLocationsKeyRingsListQueryParams;
    security: CloudkmsProjectsLocationsKeyRingsListSecurity;
}
export declare class CloudkmsProjectsLocationsKeyRingsListResponse extends SpeakeasyBase {
    contentType: string;
    listKeyRingsResponse?: shared.ListKeyRingsResponse;
    statusCode: number;
}
