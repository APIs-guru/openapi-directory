import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentLocalinventoryInsertPathParams extends SpeakeasyBase {
    merchantId: string;
    productId: string;
}
export declare class ContentLocalinventoryInsertQueryParams extends SpeakeasyBase {
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
export declare class ContentLocalinventoryInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentLocalinventoryInsertRequest extends SpeakeasyBase {
    pathParams: ContentLocalinventoryInsertPathParams;
    queryParams: ContentLocalinventoryInsertQueryParams;
    request?: shared.LocalInventory;
    security: ContentLocalinventoryInsertSecurity;
}
export declare class ContentLocalinventoryInsertResponse extends SpeakeasyBase {
    contentType: string;
    localInventory?: shared.LocalInventory;
    statusCode: number;
}
