import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SystemParameter } from "./systemparameter";


// SystemParameterRule
/** 
 * Define a system parameter rule mapping system parameter definitions to methods.
**/
export class SystemParameterRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=parameters", elemType: shared.SystemParameter })
  parameters?: SystemParameter[];

  @Metadata({ data: "json, name=selector" })
  selector?: string;
}
