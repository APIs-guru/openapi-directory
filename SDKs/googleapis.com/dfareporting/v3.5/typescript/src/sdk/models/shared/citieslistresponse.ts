import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { City } from "./city";


// CitiesListResponse
/** 
 * City List Response
**/
export class CitiesListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=cities", elemType: shared.City })
  cities?: City[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
