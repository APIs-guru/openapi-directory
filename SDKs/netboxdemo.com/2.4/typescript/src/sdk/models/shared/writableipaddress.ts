import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class WritableIpAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address: string;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, any>;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=family" })
  family?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=interface" })
  interface?: number;

  @Metadata({ data: "json, name=last_updated" })
  lastUpdated?: Date;

  @Metadata({ data: "json, name=nat_inside" })
  natInside?: number;

  @Metadata({ data: "json, name=nat_outside" })
  natOutside: number;

  @Metadata({ data: "json, name=role" })
  role?: number;

  @Metadata({ data: "json, name=status" })
  status?: number;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=tenant" })
  tenant?: number;

  @Metadata({ data: "json, name=vrf" })
  vrf?: number;
}
