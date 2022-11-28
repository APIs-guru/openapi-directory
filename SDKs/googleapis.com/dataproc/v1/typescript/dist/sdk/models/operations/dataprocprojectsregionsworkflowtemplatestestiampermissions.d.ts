import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsQueryParams extends SpeakeasyBase {
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
export declare class DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsPathParams;
    queryParams: DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsQueryParams;
    request?: shared.TestIamPermissionsRequest;
    security: DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsSecurity;
}
export declare class DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    testIamPermissionsResponse?: shared.TestIamPermissionsResponse;
}
