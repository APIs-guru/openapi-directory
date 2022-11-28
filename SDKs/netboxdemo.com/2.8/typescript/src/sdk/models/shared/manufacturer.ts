import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ManufacturerInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;
}


export class Manufacturer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=devicetype_count" })
  devicetypeCount?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=inventoryitem_count" })
  inventoryitemCount?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=platform_count" })
  platformCount?: number;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;
}
