import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AsyncOptions } from "./asyncoptions";
import { InputMapping } from "./inputmapping";
import { ValidationOptions } from "./validationoptions";


// Options
/** 
 * Options allows customized resource handling by Deployment Manager.
**/
export class Options extends SpeakeasyBase {
  @Metadata({ data: "json, name=asyncOptions", elemType: shared.AsyncOptions })
  asyncOptions?: AsyncOptions[];

  @Metadata({ data: "json, name=inputMappings", elemType: shared.InputMapping })
  inputMappings?: InputMapping[];

  @Metadata({ data: "json, name=nameProperty" })
  nameProperty?: string;

  @Metadata({ data: "json, name=validationOptions" })
  validationOptions?: ValidationOptions;
}
