import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudkmsProjectsLocationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudkmsProjectsLocationsListQueryParams extends SpeakeasyBase {
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
export declare class CloudkmsProjectsLocationsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudkmsProjectsLocationsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudkmsProjectsLocationsListSecurity extends SpeakeasyBase {
    option1?: CloudkmsProjectsLocationsListSecurityOption1;
    option2?: CloudkmsProjectsLocationsListSecurityOption2;
}
export declare class CloudkmsProjectsLocationsListRequest extends SpeakeasyBase {
    pathParams: CloudkmsProjectsLocationsListPathParams;
    queryParams: CloudkmsProjectsLocationsListQueryParams;
    security: CloudkmsProjectsLocationsListSecurity;
}
export declare class CloudkmsProjectsLocationsListResponse extends SpeakeasyBase {
    contentType: string;
    listLocationsResponse?: shared.ListLocationsResponse;
    statusCode: number;
}
