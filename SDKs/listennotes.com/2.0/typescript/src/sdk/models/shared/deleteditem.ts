import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeletedItem
/** 
 * A deleted episode or podcast.
 * An episode or a podcast could be deleted from our podcast database.
 * Possible reasons: 1) Podcast producers sometimes delete their old episodes. 2) Copyright issues.
 * 
**/
export class DeletedItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
