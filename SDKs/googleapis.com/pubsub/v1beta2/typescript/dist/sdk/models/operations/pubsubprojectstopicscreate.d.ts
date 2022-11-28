import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PubsubProjectsTopicsCreatePathParams extends SpeakeasyBase {
    name: string;
}
export declare class PubsubProjectsTopicsCreateQueryParams extends SpeakeasyBase {
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
export declare class PubsubProjectsTopicsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubProjectsTopicsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubProjectsTopicsCreateSecurity extends SpeakeasyBase {
    option1?: PubsubProjectsTopicsCreateSecurityOption1;
    option2?: PubsubProjectsTopicsCreateSecurityOption2;
}
export declare class PubsubProjectsTopicsCreateRequest extends SpeakeasyBase {
    pathParams: PubsubProjectsTopicsCreatePathParams;
    queryParams: PubsubProjectsTopicsCreateQueryParams;
    request?: shared.Topic;
    security: PubsubProjectsTopicsCreateSecurity;
}
export declare class PubsubProjectsTopicsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    topic?: shared.Topic;
}
