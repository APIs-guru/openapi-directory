import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleIdentityAccesscontextmanagerV1MethodSelector
/** 
 * An allowed method or permission of a service specified in ApiOperation.
**/
export class GoogleIdentityAccesscontextmanagerV1MethodSelector extends SpeakeasyBase {
  @Metadata({ data: "json, name=method" })
  method?: string;

  @Metadata({ data: "json, name=permission" })
  permission?: string;
}
