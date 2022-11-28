import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PubsubTopicsDeletePathParams extends SpeakeasyBase {
    topic: string;
}
export declare class PubsubTopicsDeleteQueryParams extends SpeakeasyBase {
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
export declare class PubsubTopicsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubTopicsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubTopicsDeleteSecurity extends SpeakeasyBase {
    option1?: PubsubTopicsDeleteSecurityOption1;
    option2?: PubsubTopicsDeleteSecurityOption2;
}
export declare class PubsubTopicsDeleteRequest extends SpeakeasyBase {
    pathParams: PubsubTopicsDeletePathParams;
    queryParams: PubsubTopicsDeleteQueryParams;
    security: PubsubTopicsDeleteSecurity;
}
export declare class PubsubTopicsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
