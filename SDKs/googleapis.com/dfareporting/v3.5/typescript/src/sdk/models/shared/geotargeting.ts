import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { City } from "./city";
import { Country } from "./country";
import { Metro } from "./metro";
import { PostalCode } from "./postalcode";
import { Region } from "./region";



// GeoTargeting
/** 
 * Geographical Targeting.
**/
export class GeoTargeting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cities", elemType: City })
  cities?: City[];

  @SpeakeasyMetadata({ data: "json, name=countries", elemType: Country })
  countries?: Country[];

  @SpeakeasyMetadata({ data: "json, name=excludeCountries" })
  excludeCountries?: boolean;

  @SpeakeasyMetadata({ data: "json, name=metros", elemType: Metro })
  metros?: Metro[];

  @SpeakeasyMetadata({ data: "json, name=postalCodes", elemType: PostalCode })
  postalCodes?: PostalCode[];

  @SpeakeasyMetadata({ data: "json, name=regions", elemType: Region })
  regions?: Region[];
}
