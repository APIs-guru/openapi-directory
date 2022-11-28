import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GeographicDivision } from "./geographicdivision";
import { Office } from "./office";
import { Official } from "./official";



export class RepresentativeInfoData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=divisions", elemType: GeographicDivision })
  divisions?: Map<string, GeographicDivision>;

  @SpeakeasyMetadata({ data: "json, name=offices", elemType: Office })
  offices?: Office[];

  @SpeakeasyMetadata({ data: "json, name=officials", elemType: Official })
  officials?: Official[];
}
