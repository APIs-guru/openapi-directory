import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The standard metadata of a cloud resource.
**/
export declare class StandardResourceMetadata extends SpeakeasyBase {
    additionalAttributes?: string[];
    assetType?: string;
    description?: string;
    displayName?: string;
    labels?: Map<string, string>;
    location?: string;
    name?: string;
    networkTags?: string[];
    project?: string;
}
