import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LocationPreference
/** 
 * Preferred location. This specifies where a Cloud SQL instance is located. Note that if the preferred location is not available, the instance will be located as close as possible within the region. Only one location may be specified.
**/
export class LocationPreference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=followGaeApplication" })
  followGaeApplication?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=secondaryZone" })
  secondaryZone?: string;

  @SpeakeasyMetadata({ data: "json, name=zone" })
  zone?: string;
}
