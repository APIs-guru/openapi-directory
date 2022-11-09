import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PubsubProjectsTopicsGetPathParams extends SpeakeasyBase {
    topic: string;
}
export declare class PubsubProjectsTopicsGetQueryParams extends SpeakeasyBase {
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
export declare class PubsubProjectsTopicsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubProjectsTopicsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubProjectsTopicsGetSecurity extends SpeakeasyBase {
    option1?: PubsubProjectsTopicsGetSecurityOption1;
    option2?: PubsubProjectsTopicsGetSecurityOption2;
}
export declare class PubsubProjectsTopicsGetRequest extends SpeakeasyBase {
    pathParams: PubsubProjectsTopicsGetPathParams;
    queryParams: PubsubProjectsTopicsGetQueryParams;
    security: PubsubProjectsTopicsGetSecurity;
}
export declare class PubsubProjectsTopicsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    topic?: shared.Topic;
}
