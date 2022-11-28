import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteQueryParams extends SpeakeasyBase {
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
export declare class IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteRequest extends SpeakeasyBase {
    pathParams: IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeletePathParams;
    queryParams: IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteQueryParams;
    security: IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteSecurity;
}
export declare class IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    googleProtobufEmpty?: Map<string, any>;
    statusCode: number;
}
