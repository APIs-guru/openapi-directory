import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudprivatecatalogproducerCatalogsCreateQueryParams extends SpeakeasyBase {
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
export declare class CloudprivatecatalogproducerCatalogsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudprivatecatalogproducerCatalogsCreateRequest extends SpeakeasyBase {
    queryParams: CloudprivatecatalogproducerCatalogsCreateQueryParams;
    request?: shared.GoogleCloudPrivatecatalogproducerV1beta1Catalog;
    security: CloudprivatecatalogproducerCatalogsCreateSecurity;
}
export declare class CloudprivatecatalogproducerCatalogsCreateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
