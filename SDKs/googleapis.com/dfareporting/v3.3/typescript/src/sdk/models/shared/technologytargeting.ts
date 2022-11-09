import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Browser } from "./browser";
import { ConnectionType } from "./connectiontype";
import { MobileCarrier } from "./mobilecarrier";
import { OperatingSystemVersion } from "./operatingsystemversion";
import { OperatingSystem } from "./operatingsystem";
import { PlatformType } from "./platformtype";


// TechnologyTargeting
/** 
 * Technology Targeting.
**/
export class TechnologyTargeting extends SpeakeasyBase {
  @Metadata({ data: "json, name=browsers", elemType: shared.Browser })
  browsers?: Browser[];

  @Metadata({ data: "json, name=connectionTypes", elemType: shared.ConnectionType })
  connectionTypes?: ConnectionType[];

  @Metadata({ data: "json, name=mobileCarriers", elemType: shared.MobileCarrier })
  mobileCarriers?: MobileCarrier[];

  @Metadata({ data: "json, name=operatingSystemVersions", elemType: shared.OperatingSystemVersion })
  operatingSystemVersions?: OperatingSystemVersion[];

  @Metadata({ data: "json, name=operatingSystems", elemType: shared.OperatingSystem })
  operatingSystems?: OperatingSystem[];

  @Metadata({ data: "json, name=platformTypes", elemType: shared.PlatformType })
  platformTypes?: PlatformType[];
}
