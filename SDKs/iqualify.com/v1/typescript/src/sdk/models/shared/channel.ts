import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ChannelGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoAssign" })
  autoAssign?: boolean;
}


export class Channel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=group" })
  group?: ChannelGroup;

  @SpeakeasyMetadata({ data: "json, name=groupDiscussion" })
  groupDiscussion?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isBroadcastOnly" })
  isBroadcastOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=privateSupport" })
  privateSupport?: boolean;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
