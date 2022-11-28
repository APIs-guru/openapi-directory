import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersManualTriggersListPathParams extends SpeakeasyBase {
    advertiserId: string;
}
export declare class DisplayvideoAdvertisersManualTriggersListQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoAdvertisersManualTriggersListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersManualTriggersListRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersManualTriggersListPathParams;
    queryParams: DisplayvideoAdvertisersManualTriggersListQueryParams;
    security: DisplayvideoAdvertisersManualTriggersListSecurity;
}
export declare class DisplayvideoAdvertisersManualTriggersListResponse extends SpeakeasyBase {
    contentType: string;
    listManualTriggersResponse?: shared.ListManualTriggersResponse;
    statusCode: number;
}
