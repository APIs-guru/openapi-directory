import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MemcacheParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=params" })
  params?: Map<string, string>;
}
