import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=cities", elemType: shared.City })
  cities?: City[];

  @Metadata({ data: "json, name=countries", elemType: shared.Country })
  countries?: Country[];

  @Metadata({ data: "json, name=excludeCountries" })
  excludeCountries?: boolean;

  @Metadata({ data: "json, name=metros", elemType: shared.Metro })
  metros?: Metro[];

  @Metadata({ data: "json, name=postalCodes", elemType: shared.PostalCode })
  postalCodes?: PostalCode[];

  @Metadata({ data: "json, name=regions", elemType: shared.Region })
  regions?: Region[];
}
