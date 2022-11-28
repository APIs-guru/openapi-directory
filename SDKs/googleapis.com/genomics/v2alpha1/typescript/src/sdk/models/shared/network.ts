import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Network
/** 
 * VM networking options.
**/
export class Network extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=subnetwork" })
  subnetwork?: string;

  @SpeakeasyMetadata({ data: "json, name=usePrivateAddress" })
  usePrivateAddress?: boolean;
}
