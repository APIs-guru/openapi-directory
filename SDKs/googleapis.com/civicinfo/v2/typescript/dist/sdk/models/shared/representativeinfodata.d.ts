import { SpeakeasyBase } from "../../../internal/utils";
import { GeographicDivision } from "./geographicdivision";
import { Office } from "./office";
import { Official } from "./official";
export declare class RepresentativeInfoData extends SpeakeasyBase {
    divisions?: Map<string, GeographicDivision>;
    offices?: Office[];
    officials?: Official[];
}
