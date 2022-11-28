import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersTriggersDeletePathParams extends SpeakeasyBase {
    accountId: string;
    containerId: string;
    triggerId: string;
}
export declare class TagmanagerAccountsContainersTriggersDeleteQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersTriggersDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersTriggersDeleteRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersTriggersDeletePathParams;
    queryParams: TagmanagerAccountsContainersTriggersDeleteQueryParams;
    security: TagmanagerAccountsContainersTriggersDeleteSecurity;
}
export declare class TagmanagerAccountsContainersTriggersDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
