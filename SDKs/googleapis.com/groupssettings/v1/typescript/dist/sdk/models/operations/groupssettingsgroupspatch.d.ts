import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GroupsSettingsGroupsPatchPathParams extends SpeakeasyBase {
    groupUniqueId: string;
}
export declare class GroupsSettingsGroupsPatchQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class GroupsSettingsGroupsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GroupsSettingsGroupsPatchRequest extends SpeakeasyBase {
    pathParams: GroupsSettingsGroupsPatchPathParams;
    queryParams: GroupsSettingsGroupsPatchQueryParams;
    request?: shared.Groups;
    security: GroupsSettingsGroupsPatchSecurity;
}
export declare class GroupsSettingsGroupsPatchResponse extends SpeakeasyBase {
    contentType: string;
    groups?: shared.Groups;
    statusCode: number;
}
