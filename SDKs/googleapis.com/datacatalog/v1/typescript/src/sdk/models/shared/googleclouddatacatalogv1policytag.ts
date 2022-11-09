import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDatacatalogV1PolicyTag
/** 
 * Denotes one policy tag in a taxonomy, for example, SSN. Policy tags can be defined in a hierarchy. For example: ``` + Geolocation + LatLong + City + ZipCode ``` Where the "Geolocation" policy tag contains three children.
**/
export class GoogleCloudDatacatalogV1PolicyTag extends SpeakeasyBase {
  @Metadata({ data: "json, name=childPolicyTags" })
  childPolicyTags?: string[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parentPolicyTag" })
  parentPolicyTag?: string;
}
