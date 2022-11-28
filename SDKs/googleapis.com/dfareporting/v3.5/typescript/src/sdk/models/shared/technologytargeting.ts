import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=browsers", elemType: Browser })
  browsers?: Browser[];

  @SpeakeasyMetadata({ data: "json, name=connectionTypes", elemType: ConnectionType })
  connectionTypes?: ConnectionType[];

  @SpeakeasyMetadata({ data: "json, name=mobileCarriers", elemType: MobileCarrier })
  mobileCarriers?: MobileCarrier[];

  @SpeakeasyMetadata({ data: "json, name=operatingSystemVersions", elemType: OperatingSystemVersion })
  operatingSystemVersions?: OperatingSystemVersion[];

  @SpeakeasyMetadata({ data: "json, name=operatingSystems", elemType: OperatingSystem })
  operatingSystems?: OperatingSystem[];

  @SpeakeasyMetadata({ data: "json, name=platformTypes", elemType: PlatformType })
  platformTypes?: PlatformType[];
}
