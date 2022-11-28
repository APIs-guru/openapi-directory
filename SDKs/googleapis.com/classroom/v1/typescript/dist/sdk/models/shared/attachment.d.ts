import { SpeakeasyBase } from "../../../internal/utils";
import { DriveFile } from "./drivefile";
import { Form } from "./form";
import { Link } from "./link";
import { YouTubeVideo } from "./youtubevideo";
/**
 * Attachment added to student assignment work. When creating attachments, setting the `form` field is not supported.
**/
export declare class Attachment extends SpeakeasyBase {
    driveFile?: DriveFile;
    form?: Form;
    link?: Link;
    youTubeVideo?: YouTubeVideo;
}
