import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1TagFieldEnumValue } from "./googleclouddatacatalogv1tagfieldenumvalue";
/**
 * Contains the value and additional information on a field within a Tag.
**/
export declare class GoogleCloudDatacatalogV1TagField extends SpeakeasyBase {
    boolValue?: boolean;
    displayName?: string;
    doubleValue?: number;
    enumValue?: GoogleCloudDatacatalogV1TagFieldEnumValue;
    order?: number;
    richtextValue?: string;
    stringValue?: string;
    timestampValue?: string;
}
/**
 * Contains the value and additional information on a field within a Tag.
**/
export declare class GoogleCloudDatacatalogV1TagFieldInput extends SpeakeasyBase {
    boolValue?: boolean;
    doubleValue?: number;
    enumValue?: GoogleCloudDatacatalogV1TagFieldEnumValue;
    richtextValue?: string;
    stringValue?: string;
    timestampValue?: string;
}
