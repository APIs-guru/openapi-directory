import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersReauthorizeEnvironmentsUpdatePathParams extends SpeakeasyBase {
    accountId: string;
    containerId: string;
    environmentId: string;
}
export declare class TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersReauthorizeEnvironmentsUpdatePathParams;
    queryParams: TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateQueryParams;
    request?: shared.Environment;
    security: TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateSecurity;
}
export declare class TagmanagerAccountsContainersReauthorizeEnvironmentsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    environment?: shared.Environment;
    statusCode: number;
}
