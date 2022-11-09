import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DriveFile } from "./drivefile";
import { Form } from "./form";
import { Link } from "./link";
import { YouTubeVideo } from "./youtubevideo";


// CourseMaterial
/** 
 * A material attached to a course as part of a material set.
**/
export class CourseMaterial extends SpeakeasyBase {
  @Metadata({ data: "json, name=driveFile" })
  driveFile?: DriveFile;

  @Metadata({ data: "json, name=form" })
  form?: Form;

  @Metadata({ data: "json, name=link" })
  link?: Link;

  @Metadata({ data: "json, name=youTubeVideo" })
  youTubeVideo?: YouTubeVideo;
}
