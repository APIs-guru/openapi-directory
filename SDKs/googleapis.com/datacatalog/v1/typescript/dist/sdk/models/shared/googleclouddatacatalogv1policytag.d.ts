import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Denotes one policy tag in a taxonomy, for example, SSN. Policy tags can be defined in a hierarchy. For example: ``` + Geolocation + LatLong + City + ZipCode ``` Where the "Geolocation" policy tag contains three children.
**/
export declare class GoogleCloudDatacatalogV1PolicyTag extends SpeakeasyBase {
    childPolicyTags?: string[];
    description?: string;
    displayName?: string;
    name?: string;
    parentPolicyTag?: string;
}
/**
 * Denotes one policy tag in a taxonomy, for example, SSN. Policy tags can be defined in a hierarchy. For example: ``` + Geolocation + LatLong + City + ZipCode ``` Where the "Geolocation" policy tag contains three children.
**/
export declare class GoogleCloudDatacatalogV1PolicyTagInput extends SpeakeasyBase {
    description?: string;
    displayName?: string;
    parentPolicyTag?: string;
}
