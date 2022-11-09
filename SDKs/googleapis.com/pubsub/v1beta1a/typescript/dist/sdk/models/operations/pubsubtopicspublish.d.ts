import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PubsubTopicsPublishQueryParams extends SpeakeasyBase {
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
export declare class PubsubTopicsPublishSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubTopicsPublishSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubTopicsPublishSecurity extends SpeakeasyBase {
    option1?: PubsubTopicsPublishSecurityOption1;
    option2?: PubsubTopicsPublishSecurityOption2;
}
export declare class PubsubTopicsPublishRequest extends SpeakeasyBase {
    queryParams: PubsubTopicsPublishQueryParams;
    request?: shared.PublishRequest;
    security: PubsubTopicsPublishSecurity;
}
export declare class PubsubTopicsPublishResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
