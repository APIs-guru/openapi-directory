import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a file in Poly, which can be a root, resource, or thumbnail file.
**/
export declare class File extends SpeakeasyBase {
    contentType?: string;
    relativePath?: string;
    url?: string;
}
