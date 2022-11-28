import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataprocProjectsRegionsWorkflowTemplatesDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class DataprocProjectsRegionsWorkflowTemplatesDeleteQueryParams extends SpeakeasyBase {
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
    version?: number;
}
export declare class DataprocProjectsRegionsWorkflowTemplatesDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataprocProjectsRegionsWorkflowTemplatesDeleteRequest extends SpeakeasyBase {
    pathParams: DataprocProjectsRegionsWorkflowTemplatesDeletePathParams;
    queryParams: DataprocProjectsRegionsWorkflowTemplatesDeleteQueryParams;
    security: DataprocProjectsRegionsWorkflowTemplatesDeleteSecurity;
}
export declare class DataprocProjectsRegionsWorkflowTemplatesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
