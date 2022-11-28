import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NestedSite } from "./nestedsite";



export class VlanGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=site" })
  site?: NestedSite;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;

  @SpeakeasyMetadata({ data: "json, name=vlan_count" })
  vlanCount?: number;
}
