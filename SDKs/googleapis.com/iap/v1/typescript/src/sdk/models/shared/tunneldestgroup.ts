import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TunnelDestGroup
/** 
 * A TunnelDestGroup.
**/
export class TunnelDestGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=cidrs" })
  cidrs?: string[];

  @Metadata({ data: "json, name=fqdns" })
  fqdns?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;
}
