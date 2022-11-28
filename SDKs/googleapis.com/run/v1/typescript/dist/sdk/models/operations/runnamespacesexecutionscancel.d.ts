import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RunNamespacesExecutionsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class RunNamespacesExecutionsCancelQueryParams extends SpeakeasyBase {
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
export declare class RunNamespacesExecutionsCancelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RunNamespacesExecutionsCancelRequest extends SpeakeasyBase {
    pathParams: RunNamespacesExecutionsCancelPathParams;
    queryParams: RunNamespacesExecutionsCancelQueryParams;
    request?: Map<string, any>;
    security: RunNamespacesExecutionsCancelSecurity;
}
export declare class RunNamespacesExecutionsCancelResponse extends SpeakeasyBase {
    contentType: string;
    execution?: shared.Execution;
    statusCode: number;
}
