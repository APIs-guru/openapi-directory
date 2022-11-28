import { SpeakeasyBase } from "../../../internal/utils";
import { ResultDisplayMetadata } from "./resultdisplaymetadata";
import { NamedProperty } from "./namedproperty";
import { Person } from "./person";
import { Source } from "./source";
/**
 * Metadata of a matched search result.
**/
export declare class Metadata extends SpeakeasyBase {
    createTime?: string;
    displayOptions?: ResultDisplayMetadata;
    fields?: NamedProperty[];
    mimeType?: string;
    objectType?: string;
    owner?: Person;
    source?: Source;
    thumbnailUrl?: string;
    updateTime?: string;
}
