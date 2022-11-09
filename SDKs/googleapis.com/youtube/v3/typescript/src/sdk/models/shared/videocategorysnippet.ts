import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VideoCategorySnippet
/** 
 * Basic details about a video category, such as its localized title.
**/
export class VideoCategorySnippet extends SpeakeasyBase {
  @Metadata({ data: "json, name=assignable" })
  assignable?: boolean;

  @Metadata({ data: "json, name=channelId" })
  channelId?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
