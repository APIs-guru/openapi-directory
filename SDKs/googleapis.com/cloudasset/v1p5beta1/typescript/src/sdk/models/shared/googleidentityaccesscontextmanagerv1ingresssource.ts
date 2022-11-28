import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleIdentityAccesscontextmanagerV1IngressSource
/** 
 * The source that IngressPolicy authorizes access from.
**/
export class GoogleIdentityAccesscontextmanagerV1IngressSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessLevel" })
  accessLevel?: string;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: string;
}
