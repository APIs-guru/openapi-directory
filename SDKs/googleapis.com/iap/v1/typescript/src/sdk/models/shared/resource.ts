import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Resource extends SpeakeasyBase {
  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=service" })
  service?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
