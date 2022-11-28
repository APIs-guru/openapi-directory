import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=isBroadcastOnly" })
  isBroadcastOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
