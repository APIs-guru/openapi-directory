import { SpeakeasyBase } from "../../../internal/utils";
import { FieldMetadata } from "./fieldmetadata";
import { FieldMetadataInput } from "./fieldmetadata";
/**
 * A person's location.
**/
export declare class Location extends SpeakeasyBase {
    buildingId?: string;
    current?: boolean;
    deskCode?: string;
    floor?: string;
    floorSection?: string;
    metadata?: FieldMetadata;
    type?: string;
    value?: string;
}
/**
 * A person's location.
**/
export declare class LocationInput extends SpeakeasyBase {
    buildingId?: string;
    current?: boolean;
    deskCode?: string;
    floor?: string;
    floorSection?: string;
    metadata?: FieldMetadataInput;
    type?: string;
    value?: string;
}
