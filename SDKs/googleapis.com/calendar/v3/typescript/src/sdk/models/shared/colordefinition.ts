import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ColorDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=background" })
  background?: string;

  @Metadata({ data: "json, name=foreground" })
  foreground?: string;
}
