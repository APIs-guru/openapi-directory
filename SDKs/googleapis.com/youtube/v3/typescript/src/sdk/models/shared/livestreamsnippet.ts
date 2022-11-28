import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LiveStreamSnippet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelId" })
  channelId?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=isDefaultStream" })
  isDefaultStream?: boolean;

  @SpeakeasyMetadata({ data: "json, name=publishedAt" })
  publishedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
