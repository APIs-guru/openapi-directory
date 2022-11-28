import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TunnelDestGroup
/** 
 * A TunnelDestGroup.
**/
export class TunnelDestGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cidrs" })
  cidrs?: string[];

  @SpeakeasyMetadata({ data: "json, name=fqdns" })
  fqdns?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
