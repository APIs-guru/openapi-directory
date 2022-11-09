import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LiveStreamSnippet extends SpeakeasyBase {
  @Metadata({ data: "json, name=channelId" })
  channelId?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=isDefaultStream" })
  isDefaultStream?: boolean;

  @Metadata({ data: "json, name=publishedAt" })
  publishedAt?: Date;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
