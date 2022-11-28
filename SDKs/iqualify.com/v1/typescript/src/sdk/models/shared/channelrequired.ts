import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ChannelRequired extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isBroadcastOnly" })
  isBroadcastOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;
}
