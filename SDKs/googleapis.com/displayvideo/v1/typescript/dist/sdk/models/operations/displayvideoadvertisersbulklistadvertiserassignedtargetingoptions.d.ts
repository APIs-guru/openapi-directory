import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersBulkListAdvertiserAssignedTargetingOptionsPathParams extends SpeakeasyBase {
    advertiserId: string;
}
export declare class DisplayvideoAdvertisersBulkListAdvertiserAssignedTargetingOptionsQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoAdvertisersBulkListAdvertiserAssignedTargetingOptionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersBulkListAdvertiserAssignedTargetingOptionsRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersBulkListAdvertiserAssignedTargetingOptionsPathParams;
    queryParams: DisplayvideoAdvertisersBulkListAdvertiserAssignedTargetingOptionsQueryParams;
    security: DisplayvideoAdvertisersBulkListAdvertiserAssignedTargetingOptionsSecurity;
}
export declare class DisplayvideoAdvertisersBulkListAdvertiserAssignedTargetingOptionsResponse extends SpeakeasyBase {
    bulkListAdvertiserAssignedTargetingOptionsResponse?: shared.BulkListAdvertiserAssignedTargetingOptionsResponse;
    contentType: string;
    statusCode: number;
}
