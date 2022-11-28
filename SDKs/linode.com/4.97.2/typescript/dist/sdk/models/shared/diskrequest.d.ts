import { SpeakeasyBase } from "../../../internal/utils";
import { FilesystemEnum } from "./filesystemenum";
/**
 * Disk object request.
**/
export declare class DiskRequest extends SpeakeasyBase {
    authorizedKeys?: string[];
    authorizedUsers?: string[];
    filesystem?: FilesystemEnum;
    image?: string;
    label: string;
    rootPass?: string;
    size: number;
    stackscriptData?: Map<string, any>;
    stackscriptId?: number;
}
