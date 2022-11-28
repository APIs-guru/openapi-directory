import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentProductstatusesGetPathParams extends SpeakeasyBase {
    merchantId: string;
    productId: string;
}
export declare class ContentProductstatusesGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    destinations?: string[];
    fields?: string;
    includeAttributes?: boolean;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ContentProductstatusesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentProductstatusesGetRequest extends SpeakeasyBase {
    pathParams: ContentProductstatusesGetPathParams;
    queryParams: ContentProductstatusesGetQueryParams;
    security: ContentProductstatusesGetSecurity;
}
export declare class ContentProductstatusesGetResponse extends SpeakeasyBase {
    contentType: string;
    productStatus?: shared.ProductStatus;
    statusCode: number;
}
