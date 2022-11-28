import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1TagFieldEnumValue } from "./googleclouddatacatalogv1beta1tagfieldenumvalue";
/**
 * Contains the value and supporting information for a field within a Tag.
**/
export declare class GoogleCloudDatacatalogV1beta1TagFieldInput extends SpeakeasyBase {
    boolValue?: boolean;
    doubleValue?: number;
    enumValue?: GoogleCloudDatacatalogV1beta1TagFieldEnumValue;
    stringValue?: string;
    timestampValue?: string;
}
/**
 * Contains the value and supporting information for a field within a Tag.
**/
export declare class GoogleCloudDatacatalogV1beta1TagField extends SpeakeasyBase {
    boolValue?: boolean;
    displayName?: string;
    doubleValue?: number;
    enumValue?: GoogleCloudDatacatalogV1beta1TagFieldEnumValue;
    order?: number;
    stringValue?: string;
    timestampValue?: string;
}
