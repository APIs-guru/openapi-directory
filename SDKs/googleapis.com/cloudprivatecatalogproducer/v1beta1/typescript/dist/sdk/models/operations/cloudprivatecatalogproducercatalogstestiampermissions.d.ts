import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudprivatecatalogproducerCatalogsTestIamPermissionsPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class CloudprivatecatalogproducerCatalogsTestIamPermissionsQueryParams extends SpeakeasyBase {
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
export declare class CloudprivatecatalogproducerCatalogsTestIamPermissionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudprivatecatalogproducerCatalogsTestIamPermissionsRequest extends SpeakeasyBase {
    pathParams: CloudprivatecatalogproducerCatalogsTestIamPermissionsPathParams;
    queryParams: CloudprivatecatalogproducerCatalogsTestIamPermissionsQueryParams;
    request?: shared.GoogleIamV1TestIamPermissionsRequest;
    security: CloudprivatecatalogproducerCatalogsTestIamPermissionsSecurity;
}
export declare class CloudprivatecatalogproducerCatalogsTestIamPermissionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
