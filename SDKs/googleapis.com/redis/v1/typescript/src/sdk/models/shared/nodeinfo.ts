import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NodeInfo
/** 
 * Node specific properties.
**/
export class NodeInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=zone" })
  zone?: string;
}
