import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GraphicsStatsBucket extends SpeakeasyBase {
  @Metadata({ data: "json, name=frameCount" })
  frameCount?: string;

  @Metadata({ data: "json, name=renderMillis" })
  renderMillis?: string;
}
