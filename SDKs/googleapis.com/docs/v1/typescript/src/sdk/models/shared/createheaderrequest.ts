import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Location } from "./location";

export enum CreateHeaderRequestTypeEnum {
    HeaderFooterTypeUnspecified = "HEADER_FOOTER_TYPE_UNSPECIFIED"
,    Default = "DEFAULT"
}


// CreateHeaderRequest
/** 
 * Creates a Header. The new header is applied to the SectionStyle at the location of the SectionBreak if specified, otherwise it is applied to the DocumentStyle. If a header of the specified type already exists, a 400 bad request error is returned.
**/
export class CreateHeaderRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=sectionBreakLocation" })
  sectionBreakLocation?: Location;

  @Metadata({ data: "json, name=type" })
  type?: CreateHeaderRequestTypeEnum;
}
