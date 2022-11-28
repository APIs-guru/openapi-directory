import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentRepricingrulesDeletePathParams extends SpeakeasyBase {
    merchantId: string;
    ruleId: string;
}
export declare class ContentRepricingrulesDeleteQueryParams extends SpeakeasyBase {
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
export declare class ContentRepricingrulesDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentRepricingrulesDeleteRequest extends SpeakeasyBase {
    pathParams: ContentRepricingrulesDeletePathParams;
    queryParams: ContentRepricingrulesDeleteQueryParams;
    security: ContentRepricingrulesDeleteSecurity;
}
export declare class ContentRepricingrulesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
