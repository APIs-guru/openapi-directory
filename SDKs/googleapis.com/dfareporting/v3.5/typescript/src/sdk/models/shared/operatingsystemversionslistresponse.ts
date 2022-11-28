import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OperatingSystemVersion } from "./operatingsystemversion";



// OperatingSystemVersionsListResponse
/** 
 * Operating System Version List Response
**/
export class OperatingSystemVersionsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=operatingSystemVersions", elemType: OperatingSystemVersion })
  operatingSystemVersions?: OperatingSystemVersion[];
}
