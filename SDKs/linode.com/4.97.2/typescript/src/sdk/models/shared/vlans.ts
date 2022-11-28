import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Vlans
/** 
 * A virtual local area network (VLAN) associated with your Account.
 * 
**/
export class Vlans extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=linodes" })
  linodes?: number[];

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;
}
