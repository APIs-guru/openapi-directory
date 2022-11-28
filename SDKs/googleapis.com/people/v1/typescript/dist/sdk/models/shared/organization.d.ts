import { SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
import { FieldMetadataInput } from "./fieldmetadata";
import { FieldMetadata } from "./fieldmetadata";
/**
 * A person's past or current organization. Overlapping date ranges are permitted.
**/
export declare class OrganizationInput extends SpeakeasyBase {
    costCenter?: string;
    current?: boolean;
    department?: string;
    domain?: string;
    endDate?: Date;
    fullTimeEquivalentMillipercent?: number;
    jobDescription?: string;
    location?: string;
    metadata?: FieldMetadataInput;
    name?: string;
    phoneticName?: string;
    startDate?: Date;
    symbol?: string;
    title?: string;
    type?: string;
}
/**
 * A person's past or current organization. Overlapping date ranges are permitted.
**/
export declare class Organization extends SpeakeasyBase {
    costCenter?: string;
    current?: boolean;
    department?: string;
    domain?: string;
    endDate?: Date;
    formattedType?: string;
    fullTimeEquivalentMillipercent?: number;
    jobDescription?: string;
    location?: string;
    metadata?: FieldMetadata;
    name?: string;
    phoneticName?: string;
    startDate?: Date;
    symbol?: string;
    title?: string;
    type?: string;
}
