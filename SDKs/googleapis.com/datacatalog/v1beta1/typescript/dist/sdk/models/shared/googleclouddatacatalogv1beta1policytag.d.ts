import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Denotes one policy tag in a taxonomy (e.g. ssn). Policy Tags can be defined in a hierarchy. For example, consider the following hierarchy: Geolocation -> (LatLong, City, ZipCode). PolicyTag "Geolocation" contains three child policy tags: "LatLong", "City", and "ZipCode".
**/
export declare class GoogleCloudDatacatalogV1beta1PolicyTagInput extends SpeakeasyBase {
    description?: string;
    displayName?: string;
    parentPolicyTag?: string;
}
/**
 * Denotes one policy tag in a taxonomy (e.g. ssn). Policy Tags can be defined in a hierarchy. For example, consider the following hierarchy: Geolocation -> (LatLong, City, ZipCode). PolicyTag "Geolocation" contains three child policy tags: "LatLong", "City", and "ZipCode".
**/
export declare class GoogleCloudDatacatalogV1beta1PolicyTag extends SpeakeasyBase {
    childPolicyTags?: string[];
    description?: string;
    displayName?: string;
    name?: string;
    parentPolicyTag?: string;
}
