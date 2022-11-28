import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingCampaignsUpdatePathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingCampaignsUpdateQueryParams extends SpeakeasyBase {
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
export declare class DfareportingCampaignsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingCampaignsUpdateRequest extends SpeakeasyBase {
    pathParams: DfareportingCampaignsUpdatePathParams;
    queryParams: DfareportingCampaignsUpdateQueryParams;
    request?: shared.Campaign;
    security: DfareportingCampaignsUpdateSecurity;
}
export declare class DfareportingCampaignsUpdateResponse extends SpeakeasyBase {
    campaign?: shared.Campaign;
    contentType: string;
    statusCode: number;
}
