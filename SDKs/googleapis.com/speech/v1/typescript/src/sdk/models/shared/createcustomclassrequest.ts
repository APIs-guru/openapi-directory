import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomClass } from "./customclass";



// CreateCustomClassRequest
/** 
 * Message sent by the client for the `CreateCustomClass` method.
**/
export class CreateCustomClassRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customClass" })
  customClass?: CustomClass;

  @SpeakeasyMetadata({ data: "json, name=customClassId" })
  customClassId?: string;
}
