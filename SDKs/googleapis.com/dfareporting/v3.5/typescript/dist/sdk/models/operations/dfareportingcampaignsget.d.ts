import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingCampaignsGetPathParams extends SpeakeasyBase {
    id: string;
    profileId: string;
}
export declare class DfareportingCampaignsGetQueryParams extends SpeakeasyBase {
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
export declare class DfareportingCampaignsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingCampaignsGetRequest extends SpeakeasyBase {
    pathParams: DfareportingCampaignsGetPathParams;
    queryParams: DfareportingCampaignsGetQueryParams;
    security: DfareportingCampaignsGetSecurity;
}
export declare class DfareportingCampaignsGetResponse extends SpeakeasyBase {
    campaign?: shared.Campaign;
    contentType: string;
    statusCode: number;
}
