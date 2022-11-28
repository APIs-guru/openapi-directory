import { SpeakeasyBase } from "../../../internal/utils";
import { AptSettings } from "./aptsettings";
import { ExecStep } from "./execstep";
import { WindowsUpdateSettings } from "./windowsupdatesettings";
import { YumSettings } from "./yumsettings";
import { ZypperSettings } from "./zyppersettings";
export declare enum PatchConfigRebootConfigEnum {
    RebootConfigUnspecified = "REBOOT_CONFIG_UNSPECIFIED",
    Default = "DEFAULT",
    Always = "ALWAYS",
    Never = "NEVER"
}
/**
 * Patch configuration specifications. Contains details on how to apply the patch(es) to a VM instance.
**/
export declare class PatchConfig extends SpeakeasyBase {
    apt?: AptSettings;
    goo?: Map<string, any>;
    migInstancesAllowed?: boolean;
    postStep?: ExecStep;
    preStep?: ExecStep;
    rebootConfig?: PatchConfigRebootConfigEnum;
    windowsUpdate?: WindowsUpdateSettings;
    yum?: YumSettings;
    zypper?: ZypperSettings;
}
