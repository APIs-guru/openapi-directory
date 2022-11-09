import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PrivateConnectivity
/** 
 * Private Connectivity
**/
export class PrivateConnectivity extends SpeakeasyBase {
  @Metadata({ data: "json, name=privateConnection" })
  privateConnection?: string;
}
