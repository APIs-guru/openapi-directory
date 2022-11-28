import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StructuredServiceItem
/** 
 * Represents a structured service offered by the merchant. For eg: toilet_installation.
**/
export class StructuredServiceItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceTypeId" })
  serviceTypeId?: string;
}
