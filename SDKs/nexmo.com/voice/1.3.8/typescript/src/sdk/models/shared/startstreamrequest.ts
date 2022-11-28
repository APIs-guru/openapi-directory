import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartStreamRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=level" })
  level?: string;

  @SpeakeasyMetadata({ data: "json, name=loop" })
  loop?: number;

  @SpeakeasyMetadata({ data: "json, name=stream_url" })
  streamUrl: string[];
}
