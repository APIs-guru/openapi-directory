import { SpeakeasyBase } from "../../../internal/utils";
import { Distribution } from "./distribution";
import { Date } from "./date";
/**
 * A version of the Android OS.
**/
export declare class AndroidVersion extends SpeakeasyBase {
    apiLevel?: number;
    codeName?: string;
    distribution?: Distribution;
    id?: string;
    releaseDate?: Date;
    tags?: string[];
    versionString?: string;
}
