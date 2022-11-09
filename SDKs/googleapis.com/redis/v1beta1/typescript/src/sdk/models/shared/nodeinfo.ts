import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NodeInfo
/** 
 * Node specific properties.
**/
export class NodeInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=zone" })
  zone?: string;
}
