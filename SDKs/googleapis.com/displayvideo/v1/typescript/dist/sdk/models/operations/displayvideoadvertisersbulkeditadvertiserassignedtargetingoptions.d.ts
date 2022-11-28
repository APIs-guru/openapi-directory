import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsPathParams extends SpeakeasyBase {
    advertiserId: string;
}
export declare class DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsPathParams;
    queryParams: DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsQueryParams;
    request?: shared.BulkEditAdvertiserAssignedTargetingOptionsRequestInput;
    security: DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsSecurity;
}
export declare class DisplayvideoAdvertisersBulkEditAdvertiserAssignedTargetingOptionsResponse extends SpeakeasyBase {
    bulkEditAdvertiserAssignedTargetingOptionsResponse?: shared.BulkEditAdvertiserAssignedTargetingOptionsResponse;
    contentType: string;
    statusCode: number;
}
