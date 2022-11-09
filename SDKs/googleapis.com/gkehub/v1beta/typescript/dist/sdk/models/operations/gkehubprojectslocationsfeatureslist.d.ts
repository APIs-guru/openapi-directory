import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GkehubProjectsLocationsFeaturesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class GkehubProjectsLocationsFeaturesListQueryParams extends SpeakeasyBase {
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
export declare class GkehubProjectsLocationsFeaturesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GkehubProjectsLocationsFeaturesListRequest extends SpeakeasyBase {
    pathParams: GkehubProjectsLocationsFeaturesListPathParams;
    queryParams: GkehubProjectsLocationsFeaturesListQueryParams;
    security: GkehubProjectsLocationsFeaturesListSecurity;
}
export declare class GkehubProjectsLocationsFeaturesListResponse extends SpeakeasyBase {
    contentType: string;
    listFeaturesResponse?: shared.ListFeaturesResponse;
    statusCode: number;
}
