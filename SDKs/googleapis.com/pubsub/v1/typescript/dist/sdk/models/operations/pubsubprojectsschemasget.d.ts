import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PubsubProjectsSchemasGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare enum PubsubProjectsSchemasGetViewEnum {
    SchemaViewUnspecified = "SCHEMA_VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}
export declare class PubsubProjectsSchemasGetQueryParams extends SpeakeasyBase {
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
    view?: PubsubProjectsSchemasGetViewEnum;
}
export declare class PubsubProjectsSchemasGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubProjectsSchemasGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubProjectsSchemasGetSecurity extends SpeakeasyBase {
    option1?: PubsubProjectsSchemasGetSecurityOption1;
    option2?: PubsubProjectsSchemasGetSecurityOption2;
}
export declare class PubsubProjectsSchemasGetRequest extends SpeakeasyBase {
    pathParams: PubsubProjectsSchemasGetPathParams;
    queryParams: PubsubProjectsSchemasGetQueryParams;
    security: PubsubProjectsSchemasGetSecurity;
}
export declare class PubsubProjectsSchemasGetResponse extends SpeakeasyBase {
    contentType: string;
    schema?: shared.Schema;
    statusCode: number;
}
