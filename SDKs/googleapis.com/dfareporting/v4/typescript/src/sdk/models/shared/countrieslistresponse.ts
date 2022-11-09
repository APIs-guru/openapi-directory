import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Country } from "./country";


// CountriesListResponse
/** 
 * Country List Response
**/
export class CountriesListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=countries", elemType: shared.Country })
  countries?: Country[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
