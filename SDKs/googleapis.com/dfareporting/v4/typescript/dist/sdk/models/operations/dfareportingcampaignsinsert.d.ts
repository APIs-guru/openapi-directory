import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingCampaignsInsertPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingCampaignsInsertQueryParams extends SpeakeasyBase {
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
export declare class DfareportingCampaignsInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingCampaignsInsertRequest extends SpeakeasyBase {
    pathParams: DfareportingCampaignsInsertPathParams;
    queryParams: DfareportingCampaignsInsertQueryParams;
    request?: shared.Campaign;
    security: DfareportingCampaignsInsertSecurity;
}
export declare class DfareportingCampaignsInsertResponse extends SpeakeasyBase {
    campaign?: shared.Campaign;
    contentType: string;
    statusCode: number;
}
