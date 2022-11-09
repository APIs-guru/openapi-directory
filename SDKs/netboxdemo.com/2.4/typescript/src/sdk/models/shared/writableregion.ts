import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class WritableRegion extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=parent" })
  parent?: number;

  @Metadata({ data: "json, name=slug" })
  slug: string;
}
