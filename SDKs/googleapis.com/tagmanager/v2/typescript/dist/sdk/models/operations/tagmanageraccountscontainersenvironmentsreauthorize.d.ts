import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersEnvironmentsReauthorizePathParams extends SpeakeasyBase {
    path: string;
}
export declare class TagmanagerAccountsContainersEnvironmentsReauthorizeQueryParams extends SpeakeasyBase {
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
export declare class TagmanagerAccountsContainersEnvironmentsReauthorizeSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersEnvironmentsReauthorizeRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersEnvironmentsReauthorizePathParams;
    queryParams: TagmanagerAccountsContainersEnvironmentsReauthorizeQueryParams;
    request?: shared.Environment;
    security: TagmanagerAccountsContainersEnvironmentsReauthorizeSecurity;
}
export declare class TagmanagerAccountsContainersEnvironmentsReauthorizeResponse extends SpeakeasyBase {
    contentType: string;
    environment?: shared.Environment;
    statusCode: number;
}
