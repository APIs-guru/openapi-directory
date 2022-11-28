import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PubsubProjectsTopicsDeletePathParams extends SpeakeasyBase {
    topic: string;
}
export declare class PubsubProjectsTopicsDeleteQueryParams extends SpeakeasyBase {
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
export declare class PubsubProjectsTopicsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubProjectsTopicsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubProjectsTopicsDeleteSecurity extends SpeakeasyBase {
    option1?: PubsubProjectsTopicsDeleteSecurityOption1;
    option2?: PubsubProjectsTopicsDeleteSecurityOption2;
}
export declare class PubsubProjectsTopicsDeleteRequest extends SpeakeasyBase {
    pathParams: PubsubProjectsTopicsDeletePathParams;
    queryParams: PubsubProjectsTopicsDeleteQueryParams;
    security: PubsubProjectsTopicsDeleteSecurity;
}
export declare class PubsubProjectsTopicsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
