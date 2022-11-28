import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersCreativesListPathParams extends SpeakeasyBase {
    advertiserId: string;
}
export declare class DisplayvideoAdvertisersCreativesListQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoAdvertisersCreativesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersCreativesListRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersCreativesListPathParams;
    queryParams: DisplayvideoAdvertisersCreativesListQueryParams;
    security: DisplayvideoAdvertisersCreativesListSecurity;
}
export declare class DisplayvideoAdvertisersCreativesListResponse extends SpeakeasyBase {
    contentType: string;
    listCreativesResponse?: shared.ListCreativesResponse;
    statusCode: number;
}
