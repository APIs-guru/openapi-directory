import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SharedDriveFile } from "./shareddrivefile";
import { Form } from "./form";
import { Link } from "./link";
import { YouTubeVideo } from "./youtubevideo";


// Material
/** 
 * Material attached to course work. When creating attachments, setting the `form` field is not supported.
**/
export class Material extends SpeakeasyBase {
  @Metadata({ data: "json, name=driveFile" })
  driveFile?: SharedDriveFile;

  @Metadata({ data: "json, name=form" })
  form?: Form;

  @Metadata({ data: "json, name=link" })
  link?: Link;

  @Metadata({ data: "json, name=youtubeVideo" })
  youtubeVideo?: YouTubeVideo;
}
