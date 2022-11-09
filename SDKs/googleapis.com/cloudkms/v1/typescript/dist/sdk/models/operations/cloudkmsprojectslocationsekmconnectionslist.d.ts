import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudkmsProjectsLocationsEkmConnectionsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudkmsProjectsLocationsEkmConnectionsListQueryParams extends SpeakeasyBase {
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
export declare class CloudkmsProjectsLocationsEkmConnectionsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudkmsProjectsLocationsEkmConnectionsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudkmsProjectsLocationsEkmConnectionsListSecurity extends SpeakeasyBase {
    option1?: CloudkmsProjectsLocationsEkmConnectionsListSecurityOption1;
    option2?: CloudkmsProjectsLocationsEkmConnectionsListSecurityOption2;
}
export declare class CloudkmsProjectsLocationsEkmConnectionsListRequest extends SpeakeasyBase {
    pathParams: CloudkmsProjectsLocationsEkmConnectionsListPathParams;
    queryParams: CloudkmsProjectsLocationsEkmConnectionsListQueryParams;
    security: CloudkmsProjectsLocationsEkmConnectionsListSecurity;
}
export declare class CloudkmsProjectsLocationsEkmConnectionsListResponse extends SpeakeasyBase {
    contentType: string;
    listEkmConnectionsResponse?: shared.ListEkmConnectionsResponse;
    statusCode: number;
}
