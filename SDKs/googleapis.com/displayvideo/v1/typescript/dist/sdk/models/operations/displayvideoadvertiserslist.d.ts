import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersListQueryParams extends SpeakeasyBase {
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
    partnerId?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DisplayvideoAdvertisersListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersListRequest extends SpeakeasyBase {
    queryParams: DisplayvideoAdvertisersListQueryParams;
    security: DisplayvideoAdvertisersListSecurity;
}
export declare class DisplayvideoAdvertisersListResponse extends SpeakeasyBase {
    contentType: string;
    listAdvertisersResponse?: shared.ListAdvertisersResponse;
    statusCode: number;
}
