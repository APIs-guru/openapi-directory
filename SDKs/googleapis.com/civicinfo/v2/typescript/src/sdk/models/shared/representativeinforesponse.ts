import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GeographicDivision } from "./geographicdivision";
import { SimpleAddressType } from "./simpleaddresstype";
import { Office } from "./office";
import { Official } from "./official";


// RepresentativeInfoResponse
/** 
 * The result of a representative info lookup query.
**/
export class RepresentativeInfoResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=divisions", elemType: shared.GeographicDivision })
  divisions?: Map<string, GeographicDivision>;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=normalizedInput" })
  normalizedInput?: SimpleAddressType;

  @Metadata({ data: "json, name=offices", elemType: shared.Office })
  offices?: Office[];

  @Metadata({ data: "json, name=officials", elemType: shared.Official })
  officials?: Official[];
}
