import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OperatingSystem
/** 
 * Contains information about an operating system that can be targeted by ads.
**/
export class OperatingSystem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dartId" })
  dartId?: string;

  @SpeakeasyMetadata({ data: "json, name=desktop" })
  desktop?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=mobile" })
  mobile?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
