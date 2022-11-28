import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoPartnersBulkEditPartnerAssignedTargetingOptionsPathParams extends SpeakeasyBase {
    partnerId: string;
}
export declare class DisplayvideoPartnersBulkEditPartnerAssignedTargetingOptionsQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoPartnersBulkEditPartnerAssignedTargetingOptionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoPartnersBulkEditPartnerAssignedTargetingOptionsRequest extends SpeakeasyBase {
    pathParams: DisplayvideoPartnersBulkEditPartnerAssignedTargetingOptionsPathParams;
    queryParams: DisplayvideoPartnersBulkEditPartnerAssignedTargetingOptionsQueryParams;
    request?: shared.BulkEditPartnerAssignedTargetingOptionsRequestInput;
    security: DisplayvideoPartnersBulkEditPartnerAssignedTargetingOptionsSecurity;
}
export declare class DisplayvideoPartnersBulkEditPartnerAssignedTargetingOptionsResponse extends SpeakeasyBase {
    bulkEditPartnerAssignedTargetingOptionsResponse?: shared.BulkEditPartnerAssignedTargetingOptionsResponse;
    contentType: string;
    statusCode: number;
}
