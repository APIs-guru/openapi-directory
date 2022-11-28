import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ElectionShapeLookupBehaviorEnum {
    ShapeLookupDefault = "shapeLookupDefault",
    ShapeLookupDisabled = "shapeLookupDisabled",
    ShapeLookupEnabled = "shapeLookupEnabled"
}
/**
 * Information about the election that was queried.
**/
export declare class Election extends SpeakeasyBase {
    electionDay?: string;
    id?: string;
    name?: string;
    ocdDivisionId?: string;
    shapeLookupBehavior?: ElectionShapeLookupBehaviorEnum;
}
