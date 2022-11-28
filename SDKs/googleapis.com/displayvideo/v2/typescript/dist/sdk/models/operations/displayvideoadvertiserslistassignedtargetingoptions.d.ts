import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersListAssignedTargetingOptionsPathParams extends SpeakeasyBase {
    advertiserId: string;
}
export declare class DisplayvideoAdvertisersListAssignedTargetingOptionsQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoAdvertisersListAssignedTargetingOptionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersListAssignedTargetingOptionsRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersListAssignedTargetingOptionsPathParams;
    queryParams: DisplayvideoAdvertisersListAssignedTargetingOptionsQueryParams;
    security: DisplayvideoAdvertisersListAssignedTargetingOptionsSecurity;
}
export declare class DisplayvideoAdvertisersListAssignedTargetingOptionsResponse extends SpeakeasyBase {
    bulkListAdvertiserAssignedTargetingOptionsResponse?: shared.BulkListAdvertiserAssignedTargetingOptionsResponse;
    contentType: string;
    statusCode: number;
}
