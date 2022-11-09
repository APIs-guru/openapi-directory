import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartStreamRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=level" })
  level?: string;

  @Metadata({ data: "json, name=loop" })
  loop?: number;

  @Metadata({ data: "json, name=stream_url" })
  streamUrl: string[];
}
