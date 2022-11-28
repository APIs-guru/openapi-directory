import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingCampaignCreativeAssociationsInsertPathParams extends SpeakeasyBase {
    campaignId: string;
    profileId: string;
}
export declare class DfareportingCampaignCreativeAssociationsInsertQueryParams extends SpeakeasyBase {
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
export declare class DfareportingCampaignCreativeAssociationsInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingCampaignCreativeAssociationsInsertRequest extends SpeakeasyBase {
    pathParams: DfareportingCampaignCreativeAssociationsInsertPathParams;
    queryParams: DfareportingCampaignCreativeAssociationsInsertQueryParams;
    request?: shared.CampaignCreativeAssociation;
    security: DfareportingCampaignCreativeAssociationsInsertSecurity;
}
export declare class DfareportingCampaignCreativeAssociationsInsertResponse extends SpeakeasyBase {
    campaignCreativeAssociation?: shared.CampaignCreativeAssociation;
    contentType: string;
    statusCode: number;
}
