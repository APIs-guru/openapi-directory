import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDatacatalogV1PolicyTag
/** 
 * Denotes one policy tag in a taxonomy, for example, SSN. Policy tags can be defined in a hierarchy. For example: ``` + Geolocation + LatLong + City + ZipCode ``` Where the "Geolocation" policy tag contains three children.
**/
export class GoogleCloudDatacatalogV1PolicyTag extends SpeakeasyBase {
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


// GoogleCloudDatacatalogV1PolicyTagInput
/** 
 * Denotes one policy tag in a taxonomy, for example, SSN. Policy tags can be defined in a hierarchy. For example: ``` + Geolocation + LatLong + City + ZipCode ``` Where the "Geolocation" policy tag contains three children.
**/
export class GoogleCloudDatacatalogV1PolicyTagInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=parentPolicyTag" })
  parentPolicyTag?: string;
}
