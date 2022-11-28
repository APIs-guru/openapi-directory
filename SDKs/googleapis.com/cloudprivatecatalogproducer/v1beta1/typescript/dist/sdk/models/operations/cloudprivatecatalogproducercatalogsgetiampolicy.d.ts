import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudprivatecatalogproducerCatalogsGetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class CloudprivatecatalogproducerCatalogsGetIamPolicyQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    optionsRequestedPolicyVersion?: number;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudprivatecatalogproducerCatalogsGetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudprivatecatalogproducerCatalogsGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: CloudprivatecatalogproducerCatalogsGetIamPolicyPathParams;
    queryParams: CloudprivatecatalogproducerCatalogsGetIamPolicyQueryParams;
    security: CloudprivatecatalogproducerCatalogsGetIamPolicySecurity;
}
export declare class CloudprivatecatalogproducerCatalogsGetIamPolicyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
