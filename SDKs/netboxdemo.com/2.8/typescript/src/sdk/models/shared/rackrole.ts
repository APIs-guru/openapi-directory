import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RackRole extends SpeakeasyBase {
  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=rack_count" })
  rackCount?: number;

  @Metadata({ data: "json, name=slug" })
  slug: string;
}
