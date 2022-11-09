import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Manufacturer extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=devicetype_count" })
  devicetypeCount?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=inventoryitem_count" })
  inventoryitemCount?: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=platform_count" })
  platformCount?: number;

  @Metadata({ data: "json, name=slug" })
  slug: string;
}
