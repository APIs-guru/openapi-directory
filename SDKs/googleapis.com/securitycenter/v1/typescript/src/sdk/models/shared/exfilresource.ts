import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExfilResource
/** 
 * Resource that has been exfiltrated or exfiltrated_to.
**/
export class ExfilResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=components" })
  components?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
