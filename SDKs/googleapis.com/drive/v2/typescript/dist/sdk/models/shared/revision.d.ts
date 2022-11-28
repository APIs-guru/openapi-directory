import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
/**
 * A revision of a file.
**/
export declare class Revision extends SpeakeasyBase {
    downloadUrl?: string;
    etag?: string;
    exportLinks?: Map<string, string>;
    fileSize?: string;
    id?: string;
    kind?: string;
    lastModifyingUser?: User;
    lastModifyingUserName?: string;
    md5Checksum?: string;
    mimeType?: string;
    modifiedDate?: Date;
    originalFilename?: string;
    pinned?: boolean;
    publishAuto?: boolean;
    published?: boolean;
    publishedLink?: string;
    publishedOutsideDomain?: boolean;
    selfLink?: string;
}
