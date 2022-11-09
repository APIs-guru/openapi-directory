import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ExfilResource
/** 
 * Resource that has been exfiltrated or exfiltrated_to.
**/
export class ExfilResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=components" })
  components?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;
}
