import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GroupsSettingsGroupsGetPathParams extends SpeakeasyBase {
    groupUniqueId: string;
}
export declare class GroupsSettingsGroupsGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class GroupsSettingsGroupsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GroupsSettingsGroupsGetRequest extends SpeakeasyBase {
    pathParams: GroupsSettingsGroupsGetPathParams;
    queryParams: GroupsSettingsGroupsGetQueryParams;
    security: GroupsSettingsGroupsGetSecurity;
}
export declare class GroupsSettingsGroupsGetResponse extends SpeakeasyBase {
    contentType: string;
    groups?: shared.Groups;
    statusCode: number;
}
