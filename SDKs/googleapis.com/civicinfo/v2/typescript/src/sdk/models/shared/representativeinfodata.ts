import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GeographicDivision } from "./geographicdivision";
import { Office } from "./office";
import { Official } from "./official";


export class RepresentativeInfoData extends SpeakeasyBase {
  @Metadata({ data: "json, name=divisions", elemType: shared.GeographicDivision })
  divisions?: Map<string, GeographicDivision>;

  @Metadata({ data: "json, name=offices", elemType: shared.Office })
  offices?: Office[];

  @Metadata({ data: "json, name=officials", elemType: shared.Official })
  officials?: Official[];
}
