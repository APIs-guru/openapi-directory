import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContaineranalysisProjectsOperationsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ContaineranalysisProjectsOperationsCreateQueryParams extends SpeakeasyBase {
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
export declare class ContaineranalysisProjectsOperationsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContaineranalysisProjectsOperationsCreateRequest extends SpeakeasyBase {
    pathParams: ContaineranalysisProjectsOperationsCreatePathParams;
    queryParams: ContaineranalysisProjectsOperationsCreateQueryParams;
    request?: shared.CreateOperationRequest;
    security: ContaineranalysisProjectsOperationsCreateSecurity;
}
export declare class ContaineranalysisProjectsOperationsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
