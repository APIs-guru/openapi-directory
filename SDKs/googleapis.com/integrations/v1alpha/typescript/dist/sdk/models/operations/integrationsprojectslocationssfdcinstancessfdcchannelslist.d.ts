import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    readMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListRequest extends SpeakeasyBase {
    pathParams: IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListPathParams;
    queryParams: IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListQueryParams;
    security: IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListSecurity;
}
export declare class IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudIntegrationsV1alphaListSfdcChannelsResponse?: shared.GoogleCloudIntegrationsV1alphaListSfdcChannelsResponse;
    statusCode: number;
}
