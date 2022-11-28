import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OsInfo
/** 
 * Operating system information for the VM.
**/
export class OsInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=architecture" })
  architecture?: string;

  @SpeakeasyMetadata({ data: "json, name=hostname" })
  hostname?: string;

  @SpeakeasyMetadata({ data: "json, name=kernelRelease" })
  kernelRelease?: string;

  @SpeakeasyMetadata({ data: "json, name=kernelVersion" })
  kernelVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=longName" })
  longName?: string;

  @SpeakeasyMetadata({ data: "json, name=osconfigAgentVersion" })
  osconfigAgentVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=shortName" })
  shortName?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
