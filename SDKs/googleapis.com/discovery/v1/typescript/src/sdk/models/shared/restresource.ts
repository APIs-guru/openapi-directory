import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RestMethod } from "./restmethod";
import { RestResource } from "./restresource";


export class RestResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=methods", elemType: shared.RestMethod })
  methods?: Map<string, RestMethod>;

  @Metadata({ data: "json, name=resources", elemType: shared.RestResource })
  resources?: Map<string, RestResource>;
}
