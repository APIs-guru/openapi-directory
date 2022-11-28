import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudprivatecatalogproducerCatalogsProductsCopyPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudprivatecatalogproducerCatalogsProductsCopyQueryParams extends SpeakeasyBase {
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
export declare class CloudprivatecatalogproducerCatalogsProductsCopySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudprivatecatalogproducerCatalogsProductsCopyRequest extends SpeakeasyBase {
    pathParams: CloudprivatecatalogproducerCatalogsProductsCopyPathParams;
    queryParams: CloudprivatecatalogproducerCatalogsProductsCopyQueryParams;
    request?: shared.GoogleCloudPrivatecatalogproducerV1beta1CopyProductRequest;
    security: CloudprivatecatalogproducerCatalogsProductsCopySecurity;
}
export declare class CloudprivatecatalogproducerCatalogsProductsCopyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
