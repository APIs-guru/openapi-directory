import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ChannelResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=isBroadcastOnly" })
  isBroadcastOnly?: boolean;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
