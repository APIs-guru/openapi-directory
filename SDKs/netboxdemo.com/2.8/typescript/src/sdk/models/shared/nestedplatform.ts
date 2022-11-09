import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NestedPlatform extends SpeakeasyBase {
  @Metadata({ data: "json, name=device_count" })
  deviceCount?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=slug" })
  slug: string;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=virtualmachine_count" })
  virtualmachineCount?: number;
}
