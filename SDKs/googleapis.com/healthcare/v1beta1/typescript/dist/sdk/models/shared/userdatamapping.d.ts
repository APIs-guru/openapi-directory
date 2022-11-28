import { SpeakeasyBase } from "../../../internal/utils";
import { Attribute } from "./attribute";
/**
 * Maps a resource to the associated user and Attributes.
**/
export declare class UserDataMapping extends SpeakeasyBase {
    archiveTime?: string;
    archived?: boolean;
    dataId?: string;
    name?: string;
    resourceAttributes?: Attribute[];
    userId?: string;
}
/**
 * Maps a resource to the associated user and Attributes.
**/
export declare class UserDataMappingInput extends SpeakeasyBase {
    dataId?: string;
    name?: string;
    resourceAttributes?: Attribute[];
    userId?: string;
}
