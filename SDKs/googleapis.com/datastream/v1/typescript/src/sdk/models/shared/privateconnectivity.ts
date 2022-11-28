import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PrivateConnectivity
/** 
 * Private Connectivity
**/
export class PrivateConnectivity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=privateConnection" })
  privateConnection?: string;
}
