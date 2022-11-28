import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersTriggersUpdatePathParams extends SpeakeasyBase {
    accountId: string;
    containerId: string;
    triggerId: string;
}
export declare class TagmanagerAccountsContainersTriggersUpdateQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersTriggersUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersTriggersUpdateRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersTriggersUpdatePathParams;
    queryParams: TagmanagerAccountsContainersTriggersUpdateQueryParams;
    request?: shared.Trigger;
    security: TagmanagerAccountsContainersTriggersUpdateSecurity;
}
export declare class TagmanagerAccountsContainersTriggersUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    trigger?: shared.Trigger;
}
