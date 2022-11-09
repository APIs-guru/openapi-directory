import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OperatingSystem } from "./operatingsystem";


// OperatingSystemsListResponse
/** 
 * Operating System List Response
**/
export class OperatingSystemsListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=operatingSystems", elemType: shared.OperatingSystem })
  operatingSystems?: OperatingSystem[];
}
