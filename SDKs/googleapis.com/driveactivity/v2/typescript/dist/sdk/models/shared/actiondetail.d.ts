import { SpeakeasyBase } from "../../../internal/utils";
import { AppliedLabelChange } from "./appliedlabelchange";
import { Comment } from "./comment";
import { Create } from "./create";
import { Delete } from "./delete";
import { DataLeakPreventionChange } from "./dataleakpreventionchange";
import { Move } from "./move";
import { PermissionChange } from "./permissionchange";
import { ApplicationReference } from "./applicationreference";
import { Rename } from "./rename";
import { Restore } from "./restore";
import { SettingsChange } from "./settingschange";
/**
 * Data describing the type and additional information of an action.
**/
export declare class ActionDetail extends SpeakeasyBase {
    appliedLabelChange?: AppliedLabelChange;
    comment?: Comment;
    create?: Create;
    delete?: Delete;
    dlpChange?: DataLeakPreventionChange;
    edit?: Map<string, any>;
    move?: Move;
    permissionChange?: PermissionChange;
    reference?: ApplicationReference;
    rename?: Rename;
    restore?: Restore;
    settingsChange?: SettingsChange;
}
