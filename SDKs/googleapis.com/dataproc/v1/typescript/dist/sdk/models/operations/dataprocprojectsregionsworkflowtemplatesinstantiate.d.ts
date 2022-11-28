import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataprocProjectsRegionsWorkflowTemplatesInstantiatePathParams extends SpeakeasyBase {
    name: string;
}
export declare class DataprocProjectsRegionsWorkflowTemplatesInstantiateQueryParams extends SpeakeasyBase {
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
export declare class DataprocProjectsRegionsWorkflowTemplatesInstantiateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataprocProjectsRegionsWorkflowTemplatesInstantiateRequest extends SpeakeasyBase {
    pathParams: DataprocProjectsRegionsWorkflowTemplatesInstantiatePathParams;
    queryParams: DataprocProjectsRegionsWorkflowTemplatesInstantiateQueryParams;
    request?: shared.InstantiateWorkflowTemplateRequest;
    security: DataprocProjectsRegionsWorkflowTemplatesInstantiateSecurity;
}
export declare class DataprocProjectsRegionsWorkflowTemplatesInstantiateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
