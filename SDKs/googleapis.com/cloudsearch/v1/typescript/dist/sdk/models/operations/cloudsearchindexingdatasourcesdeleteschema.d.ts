import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudsearchIndexingDatasourcesDeleteSchemaPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudsearchIndexingDatasourcesDeleteSchemaQueryParams extends SpeakeasyBase {
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
export declare class CloudsearchIndexingDatasourcesDeleteSchemaSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchIndexingDatasourcesDeleteSchemaSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchIndexingDatasourcesDeleteSchemaSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchIndexingDatasourcesDeleteSchemaSecurity extends SpeakeasyBase {
    option1?: CloudsearchIndexingDatasourcesDeleteSchemaSecurityOption1;
    option2?: CloudsearchIndexingDatasourcesDeleteSchemaSecurityOption2;
    option3?: CloudsearchIndexingDatasourcesDeleteSchemaSecurityOption3;
}
export declare class CloudsearchIndexingDatasourcesDeleteSchemaRequest extends SpeakeasyBase {
    pathParams: CloudsearchIndexingDatasourcesDeleteSchemaPathParams;
    queryParams: CloudsearchIndexingDatasourcesDeleteSchemaQueryParams;
    security: CloudsearchIndexingDatasourcesDeleteSchemaSecurity;
}
export declare class CloudsearchIndexingDatasourcesDeleteSchemaResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
