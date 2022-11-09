import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RuntimeGuestOsFeature } from "./runtimeguestosfeature";
import { LocalDiskInitializeParams } from "./localdiskinitializeparams";


// LocalDisk
/** 
 * A Local attached disk resource.
**/
export class LocalDisk extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoDelete" })
  autoDelete?: boolean;

  @Metadata({ data: "json, name=boot" })
  boot?: boolean;

  @Metadata({ data: "json, name=deviceName" })
  deviceName?: string;

  @Metadata({ data: "json, name=guestOsFeatures", elemType: shared.RuntimeGuestOsFeature })
  guestOsFeatures?: RuntimeGuestOsFeature[];

  @Metadata({ data: "json, name=index" })
  index?: number;

  @Metadata({ data: "json, name=initializeParams" })
  initializeParams?: LocalDiskInitializeParams;

  @Metadata({ data: "json, name=interface" })
  interface?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=licenses" })
  licenses?: string[];

  @Metadata({ data: "json, name=mode" })
  mode?: string;

  @Metadata({ data: "json, name=source" })
  source?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
