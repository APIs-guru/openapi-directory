import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleAppsDriveLabelsV2betaLabelPermissionRoleEnum {
    LabelRoleUnspecified = "LABEL_ROLE_UNSPECIFIED",
    Reader = "READER",
    Applier = "APPLIER",
    Organizer = "ORGANIZER",
    Editor = "EDITOR"
}
/**
 * The permission that applies to a principal (user, group, audience) on a label.
**/
export declare class GoogleAppsDriveLabelsV2betaLabelPermission extends SpeakeasyBase {
    audience?: string;
    email?: string;
    group?: string;
    name?: string;
    person?: string;
    role?: GoogleAppsDriveLabelsV2betaLabelPermissionRoleEnum;
}
