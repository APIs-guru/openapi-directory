import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentPosInventoryPathParams extends SpeakeasyBase {
    merchantId: string;
    targetMerchantId: string;
}
export declare class ContentPosInventoryQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    dryRun?: boolean;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ContentPosInventorySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentPosInventoryRequest extends SpeakeasyBase {
    pathParams: ContentPosInventoryPathParams;
    queryParams: ContentPosInventoryQueryParams;
    request?: shared.PosInventoryRequest;
    security: ContentPosInventorySecurity;
}
export declare class ContentPosInventoryResponse extends SpeakeasyBase {
    contentType: string;
    posInventoryResponse?: shared.PosInventoryResponse;
    statusCode: number;
}
