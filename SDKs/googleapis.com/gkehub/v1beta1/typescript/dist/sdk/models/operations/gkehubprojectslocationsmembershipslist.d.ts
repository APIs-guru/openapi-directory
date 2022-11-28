import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GkehubProjectsLocationsMembershipsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class GkehubProjectsLocationsMembershipsListQueryParams extends SpeakeasyBase {
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
export declare class GkehubProjectsLocationsMembershipsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GkehubProjectsLocationsMembershipsListRequest extends SpeakeasyBase {
    pathParams: GkehubProjectsLocationsMembershipsListPathParams;
    queryParams: GkehubProjectsLocationsMembershipsListQueryParams;
    security: GkehubProjectsLocationsMembershipsListSecurity;
}
export declare class GkehubProjectsLocationsMembershipsListResponse extends SpeakeasyBase {
    contentType: string;
    listMembershipsResponse?: shared.ListMembershipsResponse;
    statusCode: number;
}
