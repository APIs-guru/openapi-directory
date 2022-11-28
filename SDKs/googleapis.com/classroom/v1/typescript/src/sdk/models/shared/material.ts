import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SharedDriveFile } from "./shareddrivefile";
import { Form } from "./form";
import { Link } from "./link";
import { YouTubeVideo } from "./youtubevideo";



// Material
/** 
 * Material attached to course work. When creating attachments, setting the `form` field is not supported.
**/
export class Material extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=driveFile" })
  driveFile?: SharedDriveFile;

  @SpeakeasyMetadata({ data: "json, name=form" })
  form?: Form;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: Link;

  @SpeakeasyMetadata({ data: "json, name=youtubeVideo" })
  youtubeVideo?: YouTubeVideo;
}
