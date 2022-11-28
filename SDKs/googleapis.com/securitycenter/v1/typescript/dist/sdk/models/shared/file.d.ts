import { SpeakeasyBase } from "../../../internal/utils";
/**
 * File information about the related binary/library used by an executable, or the script used by a script interpreter
**/
export declare class File extends SpeakeasyBase {
    contents?: string;
    hashedSize?: string;
    partiallyHashed?: boolean;
    path?: string;
    sha256?: string;
    size?: string;
}
