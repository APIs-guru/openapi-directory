import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudsearchIndexingDatasourcesUpdateSchemaPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudsearchIndexingDatasourcesUpdateSchemaQueryParams extends SpeakeasyBase {
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
export declare class CloudsearchIndexingDatasourcesUpdateSchemaSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchIndexingDatasourcesUpdateSchemaSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchIndexingDatasourcesUpdateSchemaSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchIndexingDatasourcesUpdateSchemaSecurity extends SpeakeasyBase {
    option1?: CloudsearchIndexingDatasourcesUpdateSchemaSecurityOption1;
    option2?: CloudsearchIndexingDatasourcesUpdateSchemaSecurityOption2;
    option3?: CloudsearchIndexingDatasourcesUpdateSchemaSecurityOption3;
}
export declare class CloudsearchIndexingDatasourcesUpdateSchemaRequest extends SpeakeasyBase {
    pathParams: CloudsearchIndexingDatasourcesUpdateSchemaPathParams;
    queryParams: CloudsearchIndexingDatasourcesUpdateSchemaQueryParams;
    request?: shared.UpdateSchemaRequest;
    security: CloudsearchIndexingDatasourcesUpdateSchemaSecurity;
}
export declare class CloudsearchIndexingDatasourcesUpdateSchemaResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
