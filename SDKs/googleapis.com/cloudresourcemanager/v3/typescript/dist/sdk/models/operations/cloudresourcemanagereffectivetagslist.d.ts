import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudresourcemanagerEffectiveTagsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    parent?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudresourcemanagerEffectiveTagsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerEffectiveTagsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudresourcemanagerEffectiveTagsListSecurity extends SpeakeasyBase {
    option1?: CloudresourcemanagerEffectiveTagsListSecurityOption1;
    option2?: CloudresourcemanagerEffectiveTagsListSecurityOption2;
}
export declare class CloudresourcemanagerEffectiveTagsListRequest extends SpeakeasyBase {
    queryParams: CloudresourcemanagerEffectiveTagsListQueryParams;
    security: CloudresourcemanagerEffectiveTagsListSecurity;
}
export declare class CloudresourcemanagerEffectiveTagsListResponse extends SpeakeasyBase {
    contentType: string;
    listEffectiveTagsResponse?: shared.ListEffectiveTagsResponse;
    statusCode: number;
}
