import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AsyncOptions } from "./asyncoptions";
import { InputMapping } from "./inputmapping";
import { ValidationOptions } from "./validationoptions";



// Options
/** 
 * Options allows customized resource handling by Deployment Manager.
**/
export class Options extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=asyncOptions", elemType: AsyncOptions })
  asyncOptions?: AsyncOptions[];

  @SpeakeasyMetadata({ data: "json, name=inputMappings", elemType: InputMapping })
  inputMappings?: InputMapping[];

  @SpeakeasyMetadata({ data: "json, name=nameProperty" })
  nameProperty?: string;

  @SpeakeasyMetadata({ data: "json, name=validationOptions" })
  validationOptions?: ValidationOptions;
}
