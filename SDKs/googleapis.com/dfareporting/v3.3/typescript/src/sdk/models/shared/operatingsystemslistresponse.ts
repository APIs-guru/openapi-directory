import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OperatingSystem } from "./operatingsystem";



// OperatingSystemsListResponse
/** 
 * Operating System List Response
**/
export class OperatingSystemsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=operatingSystems", elemType: OperatingSystem })
  operatingSystems?: OperatingSystem[];
}
