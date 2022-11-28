import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Country } from "./country";



// CountriesListResponse
/** 
 * Country List Response
**/
export class CountriesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=countries", elemType: Country })
  countries?: Country[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
