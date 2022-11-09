import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ChannelGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoAssign" })
  autoAssign?: boolean;
}


export class Channel extends SpeakeasyBase {
  @Metadata({ data: "json, name=group" })
  group?: ChannelGroup;

  @Metadata({ data: "json, name=groupDiscussion" })
  groupDiscussion?: boolean;

  @Metadata({ data: "json, name=isBroadcastOnly" })
  isBroadcastOnly?: boolean;

  @Metadata({ data: "json, name=privateSupport" })
  privateSupport?: boolean;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
