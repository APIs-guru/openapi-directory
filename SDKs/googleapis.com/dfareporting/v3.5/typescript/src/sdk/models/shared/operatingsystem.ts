import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OperatingSystem
/** 
 * Contains information about an operating system that can be targeted by ads.
**/
export class OperatingSystem extends SpeakeasyBase {
  @Metadata({ data: "json, name=dartId" })
  dartId?: string;

  @Metadata({ data: "json, name=desktop" })
  desktop?: boolean;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=mobile" })
  mobile?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
