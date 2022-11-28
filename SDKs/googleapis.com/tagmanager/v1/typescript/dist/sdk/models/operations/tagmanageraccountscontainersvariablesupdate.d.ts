import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersVariablesUpdatePathParams extends SpeakeasyBase {
    accountId: string;
    containerId: string;
    variableId: string;
}
export declare class TagmanagerAccountsContainersVariablesUpdateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    fingerprint?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class TagmanagerAccountsContainersVariablesUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersVariablesUpdateRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersVariablesUpdatePathParams;
    queryParams: TagmanagerAccountsContainersVariablesUpdateQueryParams;
    request?: shared.Variable;
    security: TagmanagerAccountsContainersVariablesUpdateSecurity;
}
export declare class TagmanagerAccountsContainersVariablesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    variable?: shared.Variable;
}
