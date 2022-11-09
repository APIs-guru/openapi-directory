import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomClass } from "./customclass";


// CreateCustomClassRequest
/** 
 * Message sent by the client for the `CreateCustomClass` method.
**/
export class CreateCustomClassRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=customClass" })
  customClass?: CustomClass;

  @Metadata({ data: "json, name=customClassId" })
  customClassId?: string;
}
