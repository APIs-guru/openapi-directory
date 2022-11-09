import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Vlans
/** 
 * A virtual local area network (VLAN) associated with your Account.
 * 
**/
export class Vlans extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=linodes" })
  linodes?: number[];

  @Metadata({ data: "json, name=region" })
  region?: string;
}
