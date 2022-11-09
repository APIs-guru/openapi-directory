import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BlueGreenInfo } from "./bluegreeninfo";


// UpdateInfo
/** 
 * UpdateInfo contains resource (instance groups, etc), status and other intermediate information relevant to a node pool upgrade.
**/
export class UpdateInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=blueGreenInfo" })
  blueGreenInfo?: BlueGreenInfo;
}
