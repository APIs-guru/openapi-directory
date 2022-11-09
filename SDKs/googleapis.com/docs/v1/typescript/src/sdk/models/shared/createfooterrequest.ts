import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Location } from "./location";

export enum CreateFooterRequestTypeEnum {
    HeaderFooterTypeUnspecified = "HEADER_FOOTER_TYPE_UNSPECIFIED"
,    Default = "DEFAULT"
}


// CreateFooterRequest
/** 
 * Creates a Footer. The new footer is applied to the SectionStyle at the location of the SectionBreak if specified, otherwise it is applied to the DocumentStyle. If a footer of the specified type already exists, a 400 bad request error is returned.
**/
export class CreateFooterRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=sectionBreakLocation" })
  sectionBreakLocation?: Location;

  @Metadata({ data: "json, name=type" })
  type?: CreateFooterRequestTypeEnum;
}
