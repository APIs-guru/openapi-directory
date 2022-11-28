import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PubsubProjectsSchemasListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare enum PubsubProjectsSchemasListViewEnum {
    SchemaViewUnspecified = "SCHEMA_VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}
export declare class PubsubProjectsSchemasListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    view?: PubsubProjectsSchemasListViewEnum;
}
export declare class PubsubProjectsSchemasListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubProjectsSchemasListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PubsubProjectsSchemasListSecurity extends SpeakeasyBase {
    option1?: PubsubProjectsSchemasListSecurityOption1;
    option2?: PubsubProjectsSchemasListSecurityOption2;
}
export declare class PubsubProjectsSchemasListRequest extends SpeakeasyBase {
    pathParams: PubsubProjectsSchemasListPathParams;
    queryParams: PubsubProjectsSchemasListQueryParams;
    security: PubsubProjectsSchemasListSecurity;
}
export declare class PubsubProjectsSchemasListResponse extends SpeakeasyBase {
    contentType: string;
    listSchemasResponse?: shared.ListSchemasResponse;
    statusCode: number;
}
