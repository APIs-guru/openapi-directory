import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PubsubTopicsCreateQueryParams extends SpeakeasyBase {
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
export declare class PubsubTopicsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubTopicsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubTopicsCreateSecurity extends SpeakeasyBase {
    option1?: PubsubTopicsCreateSecurityOption1;
    option2?: PubsubTopicsCreateSecurityOption2;
}
export declare class PubsubTopicsCreateRequest extends SpeakeasyBase {
    queryParams: PubsubTopicsCreateQueryParams;
    request?: shared.Topic;
    security: PubsubTopicsCreateSecurity;
}
export declare class PubsubTopicsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    topic?: shared.Topic;
}
