import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDatacatalogV1beta1PolicyTagInput
/** 
 * Denotes one policy tag in a taxonomy (e.g. ssn). Policy Tags can be defined in a hierarchy. For example, consider the following hierarchy: Geolocation -> (LatLong, City, ZipCode). PolicyTag "Geolocation" contains three child policy tags: "LatLong", "City", and "ZipCode".
**/
export class GoogleCloudDatacatalogV1beta1PolicyTagInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=parentPolicyTag" })
  parentPolicyTag?: string;
}


// GoogleCloudDatacatalogV1beta1PolicyTag
/** 
 * Denotes one policy tag in a taxonomy (e.g. ssn). Policy Tags can be defined in a hierarchy. For example, consider the following hierarchy: Geolocation -> (LatLong, City, ZipCode). PolicyTag "Geolocation" contains three child policy tags: "LatLong", "City", and "ZipCode".
**/
export class GoogleCloudDatacatalogV1beta1PolicyTag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=childPolicyTags" })
  childPolicyTags?: string[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parentPolicyTag" })
  parentPolicyTag?: string;
}
