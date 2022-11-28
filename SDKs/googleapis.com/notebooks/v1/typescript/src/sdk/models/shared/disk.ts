import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GuestOsFeature } from "./guestosfeature";



// Disk
/** 
 * An instance-attached disk resource.
**/
export class Disk extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoDelete" })
  autoDelete?: boolean;

  @SpeakeasyMetadata({ data: "json, name=boot" })
  boot?: boolean;

  @SpeakeasyMetadata({ data: "json, name=deviceName" })
  deviceName?: string;

  @SpeakeasyMetadata({ data: "json, name=diskSizeGb" })
  diskSizeGb?: string;

  @SpeakeasyMetadata({ data: "json, name=guestOsFeatures", elemType: GuestOsFeature })
  guestOsFeatures?: GuestOsFeature[];

  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: string;

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
