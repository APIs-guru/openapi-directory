import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ConfigFile extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;
}
