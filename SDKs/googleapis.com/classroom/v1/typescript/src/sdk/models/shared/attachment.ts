import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DriveFile } from "./drivefile";
import { Form } from "./form";
import { Link } from "./link";
import { YouTubeVideo } from "./youtubevideo";


// Attachment
/** 
 * Attachment added to student assignment work. When creating attachments, setting the `form` field is not supported.
**/
export class Attachment extends SpeakeasyBase {
  @Metadata({ data: "json, name=driveFile" })
  driveFile?: DriveFile;

  @Metadata({ data: "json, name=form" })
  form?: Form;

  @Metadata({ data: "json, name=link" })
  link?: Link;

  @Metadata({ data: "json, name=youTubeVideo" })
  youTubeVideo?: YouTubeVideo;
}
