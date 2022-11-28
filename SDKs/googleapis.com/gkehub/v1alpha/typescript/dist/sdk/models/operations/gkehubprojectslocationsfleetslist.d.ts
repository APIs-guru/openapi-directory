import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GkehubProjectsLocationsFleetsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class GkehubProjectsLocationsFleetsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class GkehubProjectsLocationsFleetsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GkehubProjectsLocationsFleetsListRequest extends SpeakeasyBase {
    pathParams: GkehubProjectsLocationsFleetsListPathParams;
    queryParams: GkehubProjectsLocationsFleetsListQueryParams;
    security: GkehubProjectsLocationsFleetsListSecurity;
}
export declare class GkehubProjectsLocationsFleetsListResponse extends SpeakeasyBase {
    contentType: string;
    listFleetsResponse?: shared.ListFleetsResponse;
    statusCode: number;
}
