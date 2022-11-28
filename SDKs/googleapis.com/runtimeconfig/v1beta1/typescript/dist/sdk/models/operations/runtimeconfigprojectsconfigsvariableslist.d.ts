import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RuntimeconfigProjectsConfigsVariablesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RuntimeconfigProjectsConfigsVariablesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    returnValues?: boolean;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class RuntimeconfigProjectsConfigsVariablesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RuntimeconfigProjectsConfigsVariablesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RuntimeconfigProjectsConfigsVariablesListSecurity extends SpeakeasyBase {
    option1?: RuntimeconfigProjectsConfigsVariablesListSecurityOption1;
    option2?: RuntimeconfigProjectsConfigsVariablesListSecurityOption2;
}
export declare class RuntimeconfigProjectsConfigsVariablesListRequest extends SpeakeasyBase {
    pathParams: RuntimeconfigProjectsConfigsVariablesListPathParams;
    queryParams: RuntimeconfigProjectsConfigsVariablesListQueryParams;
    security: RuntimeconfigProjectsConfigsVariablesListSecurity;
}
export declare class RuntimeconfigProjectsConfigsVariablesListResponse extends SpeakeasyBase {
    contentType: string;
    listVariablesResponse?: shared.ListVariablesResponse;
    statusCode: number;
}
