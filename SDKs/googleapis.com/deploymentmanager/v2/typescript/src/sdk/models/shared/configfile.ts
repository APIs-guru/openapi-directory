import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ConfigFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;
}
