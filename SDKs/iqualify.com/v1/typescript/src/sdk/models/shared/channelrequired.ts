import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ChannelRequired extends SpeakeasyBase {
  @Metadata({ data: "json, name=isBroadcastOnly" })
  isBroadcastOnly?: boolean;

  @Metadata({ data: "json, name=title" })
  title: string;
}
