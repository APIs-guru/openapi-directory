import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsQueryParams extends SpeakeasyBase {
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
export declare class PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsPathParams;
    queryParams: PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsQueryParams;
    request?: shared.TestIamPermissionsRequest;
    security: PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsSecurity;
}
export declare class PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    testIamPermissionsResponse?: shared.TestIamPermissionsResponse;
}
