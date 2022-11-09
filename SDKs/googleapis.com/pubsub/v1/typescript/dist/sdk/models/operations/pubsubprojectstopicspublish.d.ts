import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PubsubProjectsTopicsPublishPathParams extends SpeakeasyBase {
    topic: string;
}
export declare class PubsubProjectsTopicsPublishQueryParams extends SpeakeasyBase {
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
export declare class PubsubProjectsTopicsPublishSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubProjectsTopicsPublishSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubProjectsTopicsPublishSecurity extends SpeakeasyBase {
    option1?: PubsubProjectsTopicsPublishSecurityOption1;
    option2?: PubsubProjectsTopicsPublishSecurityOption2;
}
export declare class PubsubProjectsTopicsPublishRequest extends SpeakeasyBase {
    pathParams: PubsubProjectsTopicsPublishPathParams;
    queryParams: PubsubProjectsTopicsPublishQueryParams;
    request?: shared.PublishRequest;
    security: PubsubProjectsTopicsPublishSecurity;
}
export declare class PubsubProjectsTopicsPublishResponse extends SpeakeasyBase {
    contentType: string;
    publishResponse?: shared.PublishResponse;
    statusCode: number;
}
