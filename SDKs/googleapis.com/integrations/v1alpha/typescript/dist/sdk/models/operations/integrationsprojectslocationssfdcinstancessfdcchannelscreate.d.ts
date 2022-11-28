import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsCreateQueryParams extends SpeakeasyBase {
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
export declare class IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsCreateRequest extends SpeakeasyBase {
    pathParams: IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsCreatePathParams;
    queryParams: IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsCreateQueryParams;
    request?: shared.GoogleCloudIntegrationsV1alphaSfdcChannelInput;
    security: IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsCreateSecurity;
}
export declare class IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudIntegrationsV1alphaSfdcChannel?: shared.GoogleCloudIntegrationsV1alphaSfdcChannel;
    statusCode: number;
}
