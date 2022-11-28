import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GkehubProjectsLocationsMembershipsListAdminPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class GkehubProjectsLocationsMembershipsListAdminQueryParams extends SpeakeasyBase {
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
export declare class GkehubProjectsLocationsMembershipsListAdminSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GkehubProjectsLocationsMembershipsListAdminRequest extends SpeakeasyBase {
    pathParams: GkehubProjectsLocationsMembershipsListAdminPathParams;
    queryParams: GkehubProjectsLocationsMembershipsListAdminQueryParams;
    security: GkehubProjectsLocationsMembershipsListAdminSecurity;
}
export declare class GkehubProjectsLocationsMembershipsListAdminResponse extends SpeakeasyBase {
    contentType: string;
    listAdminClusterMembershipsResponse?: shared.ListAdminClusterMembershipsResponse;
    statusCode: number;
}
