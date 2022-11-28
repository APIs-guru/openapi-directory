import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Document has been deleted. May be the result of multiple writes, including updates, the last of which deleted the Document. Multiple DocumentDelete messages may be returned for the same logical delete, if multiple targets are affected.
**/
export declare class DocumentDelete extends SpeakeasyBase {
    document?: string;
    readTime?: string;
    removedTargetIds?: number[];
}
