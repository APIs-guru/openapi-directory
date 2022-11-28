import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SasportalCustomersListQueryParams extends SpeakeasyBase {
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
export declare class SasportalCustomersListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SasportalCustomersListRequest extends SpeakeasyBase {
    queryParams: SasportalCustomersListQueryParams;
    security: SasportalCustomersListSecurity;
}
export declare class SasportalCustomersListResponse extends SpeakeasyBase {
    contentType: string;
    sasPortalListCustomersResponse?: shared.SasPortalListCustomersResponse;
    statusCode: number;
}
