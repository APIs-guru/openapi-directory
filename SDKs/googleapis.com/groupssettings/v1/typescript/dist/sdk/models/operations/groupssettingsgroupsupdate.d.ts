import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GroupsSettingsGroupsUpdatePathParams extends SpeakeasyBase {
    groupUniqueId: string;
}
export declare class GroupsSettingsGroupsUpdateQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class GroupsSettingsGroupsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GroupsSettingsGroupsUpdateRequest extends SpeakeasyBase {
    pathParams: GroupsSettingsGroupsUpdatePathParams;
    queryParams: GroupsSettingsGroupsUpdateQueryParams;
    request?: shared.Groups;
    security: GroupsSettingsGroupsUpdateSecurity;
}
export declare class GroupsSettingsGroupsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    groups?: shared.Groups;
    statusCode: number;
}
