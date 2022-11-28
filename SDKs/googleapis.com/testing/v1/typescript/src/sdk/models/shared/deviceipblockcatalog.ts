import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceIpBlock } from "./deviceipblock";



// DeviceIpBlockCatalog
/** 
 * List of IP blocks used by the Firebase Test Lab
**/
export class DeviceIpBlockCatalog extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ipBlocks", elemType: DeviceIpBlock })
  ipBlocks?: DeviceIpBlock[];
}
