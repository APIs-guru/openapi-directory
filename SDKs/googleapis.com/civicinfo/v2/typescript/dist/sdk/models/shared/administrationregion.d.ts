import { SpeakeasyBase } from "../../../internal/utils";
import { AdministrativeBody } from "./administrativebody";
import { Source } from "./source";
/**
 * Describes information about a regional election administrative area.
**/
export declare class AdministrationRegion extends SpeakeasyBase {
    electionAdministrationBody?: AdministrativeBody;
    localJurisdiction?: AdministrationRegion;
    name?: string;
    sources?: Source[];
}
