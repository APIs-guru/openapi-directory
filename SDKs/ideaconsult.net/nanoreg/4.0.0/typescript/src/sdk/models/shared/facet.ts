import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Facet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=facet" })
  facet?: Map<string, any>;
}
