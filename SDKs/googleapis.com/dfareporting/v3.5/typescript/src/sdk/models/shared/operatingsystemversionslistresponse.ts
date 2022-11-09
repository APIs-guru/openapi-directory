import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OperatingSystemVersion } from "./operatingsystemversion";


// OperatingSystemVersionsListResponse
/** 
 * Operating System Version List Response
**/
export class OperatingSystemVersionsListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=operatingSystemVersions", elemType: shared.OperatingSystemVersion })
  operatingSystemVersions?: OperatingSystemVersion[];
}
