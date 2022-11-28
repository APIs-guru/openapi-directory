import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BlueGreenInfo } from "./bluegreeninfo";



// UpdateInfo
/** 
 * UpdateInfo contains resource (instance groups, etc), status and other intermediate information relevant to a node pool upgrade.
**/
export class UpdateInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blueGreenInfo" })
  blueGreenInfo?: BlueGreenInfo;
}
