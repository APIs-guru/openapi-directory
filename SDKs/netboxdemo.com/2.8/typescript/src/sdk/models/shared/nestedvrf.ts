import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NestedVrf extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=prefix_count" })
  prefixCount?: number;

  @Metadata({ data: "json, name=rd" })
  rd?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
