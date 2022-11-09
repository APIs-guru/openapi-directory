import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SystemParameterRule } from "./systemparameterrule";


// SystemParameters
/** 
 * ### System parameter configuration A system parameter is a special kind of parameter defined by the API system, not by an individual API. It is typically mapped to an HTTP header and/or a URL query parameter. This configuration specifies which methods change the names of the system parameters.
**/
export class SystemParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=rules", elemType: shared.SystemParameterRule })
  rules?: SystemParameterRule[];
}
