import { SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";
export declare enum CreateFooterRequestTypeEnum {
    HeaderFooterTypeUnspecified = "HEADER_FOOTER_TYPE_UNSPECIFIED",
    Default = "DEFAULT"
}
/**
 * Creates a Footer. The new footer is applied to the SectionStyle at the location of the SectionBreak if specified, otherwise it is applied to the DocumentStyle. If a footer of the specified type already exists, a 400 bad request error is returned.
**/
export declare class CreateFooterRequest extends SpeakeasyBase {
    sectionBreakLocation?: Location;
    type?: CreateFooterRequestTypeEnum;
}
