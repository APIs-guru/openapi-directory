import { SpeakeasyBase } from "../../../internal/utils";
import { SharedDriveFile } from "./shareddrivefile";
import { Form } from "./form";
import { Link } from "./link";
import { YouTubeVideo } from "./youtubevideo";
/**
 * Material attached to course work. When creating attachments, setting the `form` field is not supported.
**/
export declare class Material extends SpeakeasyBase {
    driveFile?: SharedDriveFile;
    form?: Form;
    link?: Link;
    youtubeVideo?: YouTubeVideo;
}
