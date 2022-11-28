import { SpeakeasyBase } from "../../../internal/utils";
import { FileReference } from "./filereference";
/**
 * An Android package file to install.
**/
export declare class Apk extends SpeakeasyBase {
    location?: FileReference;
    packageName?: string;
}
