import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudprivatecatalogproducerCatalogsAssociationsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudprivatecatalogproducerCatalogsAssociationsCreateQueryParams extends SpeakeasyBase {
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
export declare class CloudprivatecatalogproducerCatalogsAssociationsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudprivatecatalogproducerCatalogsAssociationsCreateRequest extends SpeakeasyBase {
    pathParams: CloudprivatecatalogproducerCatalogsAssociationsCreatePathParams;
    queryParams: CloudprivatecatalogproducerCatalogsAssociationsCreateQueryParams;
    request?: shared.GoogleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest;
    security: CloudprivatecatalogproducerCatalogsAssociationsCreateSecurity;
}
export declare class CloudprivatecatalogproducerCatalogsAssociationsCreateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
