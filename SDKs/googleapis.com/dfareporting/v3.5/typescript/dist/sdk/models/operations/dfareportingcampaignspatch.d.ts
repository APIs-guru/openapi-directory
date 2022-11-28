import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingCampaignsPatchPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingCampaignsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    id: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingCampaignsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingCampaignsPatchRequest extends SpeakeasyBase {
    pathParams: DfareportingCampaignsPatchPathParams;
    queryParams: DfareportingCampaignsPatchQueryParams;
    request?: shared.Campaign;
    security: DfareportingCampaignsPatchSecurity;
}
export declare class DfareportingCampaignsPatchResponse extends SpeakeasyBase {
    campaign?: shared.Campaign;
    contentType: string;
    statusCode: number;
}
