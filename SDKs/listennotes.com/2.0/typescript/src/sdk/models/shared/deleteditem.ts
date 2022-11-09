import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeletedItem
/** 
 * A deleted episode or podcast.
 * An episode or a podcast could be deleted from our podcast database.
 * Possible reasons: 1) Podcast producers sometimes delete their old episodes. 2) Copyright issues.
 * 
**/
export class DeletedItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
