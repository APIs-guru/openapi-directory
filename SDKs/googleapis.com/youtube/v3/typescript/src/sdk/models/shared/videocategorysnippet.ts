import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VideoCategorySnippet
/** 
 * Basic details about a video category, such as its localized title.
**/
export class VideoCategorySnippet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assignable" })
  assignable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=channelId" })
  channelId?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
