import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudsearchIndexingDatasourcesGetSchemaPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudsearchIndexingDatasourcesGetSchemaQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    debugOptionsEnableDebugging?: boolean;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudsearchIndexingDatasourcesGetSchemaSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchIndexingDatasourcesGetSchemaSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchIndexingDatasourcesGetSchemaSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchIndexingDatasourcesGetSchemaSecurity extends SpeakeasyBase {
    option1?: CloudsearchIndexingDatasourcesGetSchemaSecurityOption1;
    option2?: CloudsearchIndexingDatasourcesGetSchemaSecurityOption2;
    option3?: CloudsearchIndexingDatasourcesGetSchemaSecurityOption3;
}
export declare class CloudsearchIndexingDatasourcesGetSchemaRequest extends SpeakeasyBase {
    pathParams: CloudsearchIndexingDatasourcesGetSchemaPathParams;
    queryParams: CloudsearchIndexingDatasourcesGetSchemaQueryParams;
    security: CloudsearchIndexingDatasourcesGetSchemaSecurity;
}
export declare class CloudsearchIndexingDatasourcesGetSchemaResponse extends SpeakeasyBase {
    contentType: string;
    schema?: shared.Schema;
    statusCode: number;
}
