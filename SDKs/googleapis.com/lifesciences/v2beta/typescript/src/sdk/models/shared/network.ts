import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Network
/** 
 * VM networking options.
**/
export class Network extends SpeakeasyBase {
  @Metadata({ data: "json, name=network" })
  network?: string;

  @Metadata({ data: "json, name=subnetwork" })
  subnetwork?: string;

  @Metadata({ data: "json, name=usePrivateAddress" })
  usePrivateAddress?: boolean;
}
