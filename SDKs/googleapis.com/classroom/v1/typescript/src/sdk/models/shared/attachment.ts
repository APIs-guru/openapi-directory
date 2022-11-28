import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DriveFile } from "./drivefile";
import { Form } from "./form";
import { Link } from "./link";
import { YouTubeVideo } from "./youtubevideo";



// Attachment
/** 
 * Attachment added to student assignment work. When creating attachments, setting the `form` field is not supported.
**/
export class Attachment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=driveFile" })
  driveFile?: DriveFile;

  @SpeakeasyMetadata({ data: "json, name=form" })
  form?: Form;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: Link;

  @SpeakeasyMetadata({ data: "json, name=youTubeVideo" })
  youTubeVideo?: YouTubeVideo;
}
