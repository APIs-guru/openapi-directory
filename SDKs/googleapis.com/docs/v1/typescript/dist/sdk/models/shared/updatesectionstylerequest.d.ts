import { SpeakeasyBase } from "../../../internal/utils";
import { Range } from "./range";
import { SectionStyle } from "./sectionstyle";
/**
 * Updates the SectionStyle.
**/
export declare class UpdateSectionStyleRequest extends SpeakeasyBase {
    fields?: string;
    range?: Range;
    sectionStyle?: SectionStyle;
}
