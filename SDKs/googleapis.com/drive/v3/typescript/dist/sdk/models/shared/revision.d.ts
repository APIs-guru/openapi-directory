import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
/**
 * The metadata for a revision to a file.
**/
export declare class Revision extends SpeakeasyBase {
    exportLinks?: Map<string, string>;
    id?: string;
    keepForever?: boolean;
    kind?: string;
    lastModifyingUser?: User;
    md5Checksum?: string;
    mimeType?: string;
    modifiedTime?: Date;
    originalFilename?: string;
    publishAuto?: boolean;
    published?: boolean;
    publishedLink?: string;
    publishedOutsideDomain?: boolean;
    size?: string;
}
