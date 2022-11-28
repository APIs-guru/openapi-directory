import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GraphicsStatsBucket extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=frameCount" })
  frameCount?: string;

  @SpeakeasyMetadata({ data: "json, name=renderMillis" })
  renderMillis?: string;
}
