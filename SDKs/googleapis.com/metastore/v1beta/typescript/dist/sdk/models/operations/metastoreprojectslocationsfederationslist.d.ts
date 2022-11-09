import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class MetastoreProjectsLocationsFederationsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MetastoreProjectsLocationsFederationsListQueryParams extends SpeakeasyBase {
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
export declare class MetastoreProjectsLocationsFederationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MetastoreProjectsLocationsFederationsListRequest extends SpeakeasyBase {
    pathParams: MetastoreProjectsLocationsFederationsListPathParams;
    queryParams: MetastoreProjectsLocationsFederationsListQueryParams;
    security: MetastoreProjectsLocationsFederationsListSecurity;
}
export declare class MetastoreProjectsLocationsFederationsListResponse extends SpeakeasyBase {
    contentType: string;
    listFederationsResponse?: shared.ListFederationsResponse;
    statusCode: number;
}
