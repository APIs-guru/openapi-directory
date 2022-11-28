import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GeographicDivision } from "./geographicdivision";
import { SimpleAddressType } from "./simpleaddresstype";
import { Office } from "./office";
import { Official } from "./official";



// RepresentativeInfoResponse
/** 
 * The result of a representative info lookup query.
**/
export class RepresentativeInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=divisions", elemType: GeographicDivision })
  divisions?: Map<string, GeographicDivision>;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=normalizedInput" })
  normalizedInput?: SimpleAddressType;

  @SpeakeasyMetadata({ data: "json, name=offices", elemType: Office })
  offices?: Office[];

  @SpeakeasyMetadata({ data: "json, name=officials", elemType: Official })
  officials?: Official[];
}
