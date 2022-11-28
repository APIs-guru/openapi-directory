import { SpeakeasyBase } from "../../../internal/utils";
import { MetadataItem } from "./metadataitem";
/**
 * A Compute Engine metadata entry. Identical to the metadata on the corresponding Compute Engine resource.
**/
export declare class Metadata extends SpeakeasyBase {
    fingerPrint?: string;
    items?: MetadataItem[];
}
