import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RestMethod } from "./restmethod";



export class RestResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=methods", elemType: RestMethod })
  methods?: Map<string, RestMethod>;

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: RestResource })
  resources?: Map<string, RestResource>;
}
