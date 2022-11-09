import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GuestOsFeature } from "./guestosfeature";


// Disk
/** 
 * An instance-attached disk resource.
**/
export class Disk extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoDelete" })
  autoDelete?: boolean;

  @Metadata({ data: "json, name=boot" })
  boot?: boolean;

  @Metadata({ data: "json, name=deviceName" })
  deviceName?: string;

  @Metadata({ data: "json, name=diskSizeGb" })
  diskSizeGb?: string;

  @Metadata({ data: "json, name=guestOsFeatures", elemType: shared.GuestOsFeature })
  guestOsFeatures?: GuestOsFeature[];

  @Metadata({ data: "json, name=index" })
  index?: string;

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
