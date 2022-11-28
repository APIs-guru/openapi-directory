import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersCombinePathParams extends SpeakeasyBase {
    path: string;
}
export declare enum TagmanagerAccountsContainersCombineSettingSourceEnum {
    SettingSourceUnspecified = "settingSourceUnspecified",
    Current = "current",
    Other = "other"
}
export declare class TagmanagerAccountsContainersCombineQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    allowUserPermissionFeatureUpdate?: boolean;
    alt?: shared.AltEnum;
    callback?: string;
    containerId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    settingSource?: TagmanagerAccountsContainersCombineSettingSourceEnum;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class TagmanagerAccountsContainersCombineSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersCombineRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersCombinePathParams;
    queryParams: TagmanagerAccountsContainersCombineQueryParams;
    security: TagmanagerAccountsContainersCombineSecurity;
}
export declare class TagmanagerAccountsContainersCombineResponse extends SpeakeasyBase {
    container?: shared.Container;
    contentType: string;
    statusCode: number;
}
