import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoPartnersEditAssignedTargetingOptionsPathParams extends SpeakeasyBase {
    partnerId: string;
}
export declare class DisplayvideoPartnersEditAssignedTargetingOptionsQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoPartnersEditAssignedTargetingOptionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoPartnersEditAssignedTargetingOptionsRequest extends SpeakeasyBase {
    pathParams: DisplayvideoPartnersEditAssignedTargetingOptionsPathParams;
    queryParams: DisplayvideoPartnersEditAssignedTargetingOptionsQueryParams;
    request?: shared.BulkEditPartnerAssignedTargetingOptionsRequestInput;
    security: DisplayvideoPartnersEditAssignedTargetingOptionsSecurity;
}
export declare class DisplayvideoPartnersEditAssignedTargetingOptionsResponse extends SpeakeasyBase {
    bulkEditPartnerAssignedTargetingOptionsResponse?: shared.BulkEditPartnerAssignedTargetingOptionsResponse;
    contentType: string;
    statusCode: number;
}
