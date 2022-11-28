import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LocalDiskInitializeParams } from "./localdiskinitializeparams";
import { RuntimeGuestOsFeature } from "./runtimeguestosfeature";



// LocalDiskInput
/** 
 * A Local attached disk resource.
**/
export class LocalDiskInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=initializeParams" })
  initializeParams?: LocalDiskInitializeParams;

  @SpeakeasyMetadata({ data: "json, name=interface" })
  interface?: string;

  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


// LocalDisk
/** 
 * A Local attached disk resource.
**/
export class LocalDisk extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoDelete" })
  autoDelete?: boolean;

  @SpeakeasyMetadata({ data: "json, name=boot" })
  boot?: boolean;

  @SpeakeasyMetadata({ data: "json, name=deviceName" })
  deviceName?: string;

  @SpeakeasyMetadata({ data: "json, name=guestOsFeatures", elemType: RuntimeGuestOsFeature })
  guestOsFeatures?: RuntimeGuestOsFeature[];

  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=initializeParams" })
  initializeParams?: LocalDiskInitializeParams;

  @SpeakeasyMetadata({ data: "json, name=interface" })
  interface?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=licenses" })
  licenses?: string[];

  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
