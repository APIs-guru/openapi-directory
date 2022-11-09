import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Filtering extends SpeakeasyBase {
  @Metadata({ data: "json, name=exclude" })
  exclude?: Map<string, string>[];

  @Metadata({ data: "json, name=include" })
  include?: Map<string, string>[];
}
