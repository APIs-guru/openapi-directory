import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersVariablesDeletePathParams extends SpeakeasyBase {
    accountId: string;
    containerId: string;
    variableId: string;
}
export declare class TagmanagerAccountsContainersVariablesDeleteQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersVariablesDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersVariablesDeleteRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersVariablesDeletePathParams;
    queryParams: TagmanagerAccountsContainersVariablesDeleteQueryParams;
    security: TagmanagerAccountsContainersVariablesDeleteSecurity;
}
export declare class TagmanagerAccountsContainersVariablesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
