import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersTriggersCreatePathParams extends SpeakeasyBase {
    accountId: string;
    containerId: string;
}
export declare class TagmanagerAccountsContainersTriggersCreateQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersTriggersCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersTriggersCreateRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersTriggersCreatePathParams;
    queryParams: TagmanagerAccountsContainersTriggersCreateQueryParams;
    request?: shared.Trigger;
    security: TagmanagerAccountsContainersTriggersCreateSecurity;
}
export declare class TagmanagerAccountsContainersTriggersCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    trigger?: shared.Trigger;
}
