import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GrafeasV1beta1IntotoSignature } from "./grafeasv1beta1intotosignature";
import { Link } from "./link";


// GrafeasV1beta1IntotoDetails
/** 
 * This corresponds to a signed in-toto link - it is made up of one or more signatures and the in-toto link itself. This is used for occurrences of a Grafeas in-toto note.
**/
export class GrafeasV1beta1IntotoDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=signatures", elemType: shared.GrafeasV1beta1IntotoSignature })
  signatures?: GrafeasV1beta1IntotoSignature[];

  @Metadata({ data: "json, name=signed" })
  signed?: Link;
}
