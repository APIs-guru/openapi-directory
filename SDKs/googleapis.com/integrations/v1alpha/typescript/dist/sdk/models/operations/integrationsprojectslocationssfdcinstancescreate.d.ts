import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IntegrationsProjectsLocationsSfdcInstancesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class IntegrationsProjectsLocationsSfdcInstancesCreateQueryParams extends SpeakeasyBase {
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
export declare class IntegrationsProjectsLocationsSfdcInstancesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IntegrationsProjectsLocationsSfdcInstancesCreateRequest extends SpeakeasyBase {
    pathParams: IntegrationsProjectsLocationsSfdcInstancesCreatePathParams;
    queryParams: IntegrationsProjectsLocationsSfdcInstancesCreateQueryParams;
    request?: shared.GoogleCloudIntegrationsV1alphaSfdcInstanceInput;
    security: IntegrationsProjectsLocationsSfdcInstancesCreateSecurity;
}
export declare class IntegrationsProjectsLocationsSfdcInstancesCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudIntegrationsV1alphaSfdcInstance?: shared.GoogleCloudIntegrationsV1alphaSfdcInstance;
    statusCode: number;
}
