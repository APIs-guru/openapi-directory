import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ServiceIdentity
/** 
 * The per-product per-project service identity for Cloud TPU service.
**/
export class ServiceIdentity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;
}
