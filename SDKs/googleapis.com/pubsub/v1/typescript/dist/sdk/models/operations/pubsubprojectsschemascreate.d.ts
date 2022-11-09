import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PubsubProjectsSchemasCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class PubsubProjectsSchemasCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    schemaId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class PubsubProjectsSchemasCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubProjectsSchemasCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubProjectsSchemasCreateSecurity extends SpeakeasyBase {
    option1?: PubsubProjectsSchemasCreateSecurityOption1;
    option2?: PubsubProjectsSchemasCreateSecurityOption2;
}
export declare class PubsubProjectsSchemasCreateRequest extends SpeakeasyBase {
    pathParams: PubsubProjectsSchemasCreatePathParams;
    queryParams: PubsubProjectsSchemasCreateQueryParams;
    request?: shared.Schema;
    security: PubsubProjectsSchemasCreateSecurity;
}
export declare class PubsubProjectsSchemasCreateResponse extends SpeakeasyBase {
    contentType: string;
    schema?: shared.Schema;
    statusCode: number;
}
