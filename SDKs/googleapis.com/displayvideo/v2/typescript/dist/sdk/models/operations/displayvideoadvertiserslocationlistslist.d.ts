import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersLocationListsListPathParams extends SpeakeasyBase {
    advertiserId: string;
}
export declare class DisplayvideoAdvertisersLocationListsListQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoAdvertisersLocationListsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersLocationListsListRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersLocationListsListPathParams;
    queryParams: DisplayvideoAdvertisersLocationListsListQueryParams;
    security: DisplayvideoAdvertisersLocationListsListSecurity;
}
export declare class DisplayvideoAdvertisersLocationListsListResponse extends SpeakeasyBase {
    contentType: string;
    listLocationListsResponse?: shared.ListLocationListsResponse;
    statusCode: number;
}
