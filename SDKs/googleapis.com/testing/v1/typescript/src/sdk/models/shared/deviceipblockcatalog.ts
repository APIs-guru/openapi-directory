import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeviceIpBlock } from "./deviceipblock";


// DeviceIpBlockCatalog
/** 
 * List of IP blocks used by the Firebase Test Lab
**/
export class DeviceIpBlockCatalog extends SpeakeasyBase {
  @Metadata({ data: "json, name=ipBlocks", elemType: shared.DeviceIpBlock })
  ipBlocks?: DeviceIpBlock[];
}
