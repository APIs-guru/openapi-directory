import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MediaPathInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=NetworkPath" })
  networkPath?: string;

  @Metadata({ data: "json, name=Path" })
  path?: string;
}
