import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SystemParameter } from "./systemparameter";



// SystemParameterRule
/** 
 * Define a system parameter rule mapping system parameter definitions to methods.
**/
export class SystemParameterRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parameters", elemType: SystemParameter })
  parameters?: SystemParameter[];

  @SpeakeasyMetadata({ data: "json, name=selector" })
  selector?: string;
}
