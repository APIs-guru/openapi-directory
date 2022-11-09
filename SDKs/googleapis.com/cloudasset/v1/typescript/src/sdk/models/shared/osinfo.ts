import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OsInfo
/** 
 * Operating system information for the VM.
**/
export class OsInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=architecture" })
  architecture?: string;

  @Metadata({ data: "json, name=hostname" })
  hostname?: string;

  @Metadata({ data: "json, name=kernelRelease" })
  kernelRelease?: string;

  @Metadata({ data: "json, name=kernelVersion" })
  kernelVersion?: string;

  @Metadata({ data: "json, name=longName" })
  longName?: string;

  @Metadata({ data: "json, name=osconfigAgentVersion" })
  osconfigAgentVersion?: string;

  @Metadata({ data: "json, name=shortName" })
  shortName?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
