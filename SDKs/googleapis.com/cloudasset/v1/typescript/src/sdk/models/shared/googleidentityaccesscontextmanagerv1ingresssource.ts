import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleIdentityAccesscontextmanagerV1IngressSource
/** 
 * The source that IngressPolicy authorizes access from.
**/
export class GoogleIdentityAccesscontextmanagerV1IngressSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessLevel" })
  accessLevel?: string;

  @Metadata({ data: "json, name=resource" })
  resource?: string;
}
