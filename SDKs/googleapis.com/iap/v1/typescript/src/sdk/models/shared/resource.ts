import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Resource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=service" })
  service?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
