import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NestedManufacturer } from "./nestedmanufacturer";



export class Platform extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=device_count" })
  deviceCount?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=manufacturer" })
  manufacturer?: NestedManufacturer;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=napalm_args" })
  napalmArgs?: string;

  @SpeakeasyMetadata({ data: "json, name=napalm_driver" })
  napalmDriver?: string;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;

  @SpeakeasyMetadata({ data: "json, name=virtualmachine_count" })
  virtualmachineCount?: number;
}
