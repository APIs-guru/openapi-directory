import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetQueryParams extends SpeakeasyBase {
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
export declare class IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetRequest extends SpeakeasyBase {
    pathParams: IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetPathParams;
    queryParams: IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetQueryParams;
    security: IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetSecurity;
}
export declare class IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudIntegrationsV1alphaSfdcChannel?: shared.GoogleCloudIntegrationsV1alphaSfdcChannel;
    statusCode: number;
}
