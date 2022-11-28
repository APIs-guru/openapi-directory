import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentRegionalinventoryInsertPathParams extends SpeakeasyBase {
    merchantId: string;
    productId: string;
}
export declare class ContentRegionalinventoryInsertQueryParams extends SpeakeasyBase {
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
export declare class ContentRegionalinventoryInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentRegionalinventoryInsertRequest extends SpeakeasyBase {
    pathParams: ContentRegionalinventoryInsertPathParams;
    queryParams: ContentRegionalinventoryInsertQueryParams;
    request?: shared.RegionalInventory;
    security: ContentRegionalinventoryInsertSecurity;
}
export declare class ContentRegionalinventoryInsertResponse extends SpeakeasyBase {
    contentType: string;
    regionalInventory?: shared.RegionalInventory;
    statusCode: number;
}
