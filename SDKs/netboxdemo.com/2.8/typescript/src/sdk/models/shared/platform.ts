import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NestedManufacturer } from "./nestedmanufacturer";


export class Platform extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=device_count" })
  deviceCount?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=manufacturer" })
  manufacturer?: NestedManufacturer;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=napalm_args" })
  napalmArgs?: string;

  @Metadata({ data: "json, name=napalm_driver" })
  napalmDriver?: string;

  @Metadata({ data: "json, name=slug" })
  slug: string;

  @Metadata({ data: "json, name=virtualmachine_count" })
  virtualmachineCount?: number;
}
