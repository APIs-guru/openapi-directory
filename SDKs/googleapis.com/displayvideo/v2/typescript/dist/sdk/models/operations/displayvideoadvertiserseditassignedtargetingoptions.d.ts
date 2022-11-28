import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersEditAssignedTargetingOptionsPathParams extends SpeakeasyBase {
    advertiserId: string;
}
export declare class DisplayvideoAdvertisersEditAssignedTargetingOptionsQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DisplayvideoAdvertisersEditAssignedTargetingOptionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersEditAssignedTargetingOptionsRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersEditAssignedTargetingOptionsPathParams;
    queryParams: DisplayvideoAdvertisersEditAssignedTargetingOptionsQueryParams;
    request?: shared.BulkEditAdvertiserAssignedTargetingOptionsRequestInput;
    security: DisplayvideoAdvertisersEditAssignedTargetingOptionsSecurity;
}
export declare class DisplayvideoAdvertisersEditAssignedTargetingOptionsResponse extends SpeakeasyBase {
    bulkEditAdvertiserAssignedTargetingOptionsResponse?: shared.BulkEditAdvertiserAssignedTargetingOptionsResponse;
    contentType: string;
    statusCode: number;
}
