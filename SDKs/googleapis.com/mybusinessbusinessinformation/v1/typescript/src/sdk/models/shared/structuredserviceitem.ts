import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StructuredServiceItem
/** 
 * Represents a structured service offered by the merchant. For eg: toilet_installation.
**/
export class StructuredServiceItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=serviceTypeId" })
  serviceTypeId?: string;
}
