import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AptSettings } from "./aptsettings";
import { ExecStep } from "./execstep";
import { ExecStep } from "./execstep";
import { WindowsUpdateSettings } from "./windowsupdatesettings";
import { YumSettings } from "./yumsettings";
import { ZypperSettings } from "./zyppersettings";

export enum PatchConfigRebootConfigEnum {
    RebootConfigUnspecified = "REBOOT_CONFIG_UNSPECIFIED"
,    Default = "DEFAULT"
,    Always = "ALWAYS"
,    Never = "NEVER"
}


// PatchConfig
/** 
 * Patch configuration specifications. Contains details on how to apply the patch(es) to a VM instance.
**/
export class PatchConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=apt" })
  apt?: AptSettings;

  @Metadata({ data: "json, name=goo" })
  goo?: Map<string, any>;

  @Metadata({ data: "json, name=migInstancesAllowed" })
  migInstancesAllowed?: boolean;

  @Metadata({ data: "json, name=postStep" })
  postStep?: ExecStep;

  @Metadata({ data: "json, name=preStep" })
  preStep?: ExecStep;

  @Metadata({ data: "json, name=rebootConfig" })
  rebootConfig?: PatchConfigRebootConfigEnum;

  @Metadata({ data: "json, name=windowsUpdate" })
  windowsUpdate?: WindowsUpdateSettings;

  @Metadata({ data: "json, name=yum" })
  yum?: YumSettings;

  @Metadata({ data: "json, name=zypper" })
  zypper?: ZypperSettings;
}
