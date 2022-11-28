import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DriveFile } from "./drivefile";
import { Form } from "./form";
import { Link } from "./link";
import { YouTubeVideo } from "./youtubevideo";



// CourseMaterial
/** 
 * A material attached to a course as part of a material set.
**/
export class CourseMaterial extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=driveFile" })
  driveFile?: DriveFile;

  @SpeakeasyMetadata({ data: "json, name=form" })
  form?: Form;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: Link;

  @SpeakeasyMetadata({ data: "json, name=youTubeVideo" })
  youTubeVideo?: YouTubeVideo;
}
