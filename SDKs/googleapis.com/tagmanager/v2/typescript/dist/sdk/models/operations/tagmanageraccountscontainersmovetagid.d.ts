import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagmanagerAccountsContainersMoveTagIdPathParams extends SpeakeasyBase {
    path: string;
}
export declare class TagmanagerAccountsContainersMoveTagIdQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    allowUserPermissionFeatureUpdate?: boolean;
    alt?: shared.AltEnum;
    callback?: string;
    copySettings?: boolean;
    copyTermsOfService?: boolean;
    copyUsers?: boolean;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    tagId?: string;
    tagName?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class TagmanagerAccountsContainersMoveTagIdSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TagmanagerAccountsContainersMoveTagIdRequest extends SpeakeasyBase {
    pathParams: TagmanagerAccountsContainersMoveTagIdPathParams;
    queryParams: TagmanagerAccountsContainersMoveTagIdQueryParams;
    security: TagmanagerAccountsContainersMoveTagIdSecurity;
}
export declare class TagmanagerAccountsContainersMoveTagIdResponse extends SpeakeasyBase {
    container?: shared.Container;
    contentType: string;
    statusCode: number;
}
