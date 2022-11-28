import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AptSettings } from "./aptsettings";
import { ExecStep } from "./execstep";
import { WindowsUpdateSettings } from "./windowsupdatesettings";
import { YumSettings } from "./yumsettings";
import { ZypperSettings } from "./zyppersettings";


export enum PatchConfigRebootConfigEnum {
    RebootConfigUnspecified = "REBOOT_CONFIG_UNSPECIFIED",
    Default = "DEFAULT",
    Always = "ALWAYS",
    Never = "NEVER"
}


// PatchConfig
/** 
 * Patch configuration specifications. Contains details on how to apply the patch(es) to a VM instance.
**/
export class PatchConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apt" })
  apt?: AptSettings;

  @SpeakeasyMetadata({ data: "json, name=goo" })
  goo?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=migInstancesAllowed" })
  migInstancesAllowed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=postStep" })
  postStep?: ExecStep;

  @SpeakeasyMetadata({ data: "json, name=preStep" })
  preStep?: ExecStep;

  @SpeakeasyMetadata({ data: "json, name=rebootConfig" })
  rebootConfig?: PatchConfigRebootConfigEnum;

  @SpeakeasyMetadata({ data: "json, name=windowsUpdate" })
  windowsUpdate?: WindowsUpdateSettings;

  @SpeakeasyMetadata({ data: "json, name=yum" })
  yum?: YumSettings;

  @SpeakeasyMetadata({ data: "json, name=zypper" })
  zypper?: ZypperSettings;
}
