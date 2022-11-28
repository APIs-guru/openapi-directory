import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WritablePrefixInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=is_pool" })
  isPool?: boolean;

  @SpeakeasyMetadata({ data: "json, name=prefix" })
  prefix: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: number;

  @SpeakeasyMetadata({ data: "json, name=site" })
  site?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=tenant" })
  tenant?: number;

  @SpeakeasyMetadata({ data: "json, name=vlan" })
  vlan?: number;

  @SpeakeasyMetadata({ data: "json, name=vrf" })
  vrf?: number;
}
