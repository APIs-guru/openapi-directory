import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Facet extends SpeakeasyBase {
  @Metadata({ data: "json, name=facet" })
  facet?: Map<string, any>;
}
