import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ServiceIdentity
/** 
 * The per-product per-project service identity for Cloud TPU service.
**/
export class ServiceIdentity extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;
}
