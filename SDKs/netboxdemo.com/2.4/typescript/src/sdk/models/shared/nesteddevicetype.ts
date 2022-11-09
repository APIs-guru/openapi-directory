import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NestedManufacturer } from "./nestedmanufacturer";


export class NestedDeviceType extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=manufacturer" })
  manufacturer?: NestedManufacturer;

  @Metadata({ data: "json, name=model" })
  model: string;

  @Metadata({ data: "json, name=slug" })
  slug: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
