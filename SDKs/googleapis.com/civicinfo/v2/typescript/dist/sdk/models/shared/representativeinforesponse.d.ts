import { SpeakeasyBase } from "../../../internal/utils";
import { GeographicDivision } from "./geographicdivision";
import { SimpleAddressType } from "./simpleaddresstype";
import { Office } from "./office";
import { Official } from "./official";
/**
 * The result of a representative info lookup query.
**/
export declare class RepresentativeInfoResponse extends SpeakeasyBase {
    divisions?: Map<string, GeographicDivision>;
    kind?: string;
    normalizedInput?: SimpleAddressType;
    offices?: Office[];
    officials?: Official[];
}
