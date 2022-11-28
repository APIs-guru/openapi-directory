import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersVersionsUndeletePathParams extends SpeakeasyBase {
    path: string;
}
export declare class TagmanagerAccountsContainersVersionsUndeleteQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersVersionsUndeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersVersionsUndeleteRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersVersionsUndeletePathParams;
    queryParams: TagmanagerAccountsContainersVersionsUndeleteQueryParams;
    security: TagmanagerAccountsContainersVersionsUndeleteSecurity;
}
export declare class TagmanagerAccountsContainersVersionsUndeleteResponse extends SpeakeasyBase {
    containerVersion?: shared.ContainerVersion;
    contentType: string;
    statusCode: number;
}
