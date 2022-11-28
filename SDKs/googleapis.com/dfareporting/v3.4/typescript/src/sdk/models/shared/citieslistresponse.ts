import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { City } from "./city";



// CitiesListResponse
/** 
 * City List Response
**/
export class CitiesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cities", elemType: City })
  cities?: City[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
