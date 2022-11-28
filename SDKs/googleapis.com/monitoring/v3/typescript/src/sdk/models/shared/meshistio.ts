import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MeshIstio
/** 
 * Istio service scoped to an Istio mesh. Anthos clusters running ASM < 1.6.8 will have their services ingested as this type.
**/
export class MeshIstio extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meshUid" })
  meshUid?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceName" })
  serviceName?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceNamespace" })
  serviceNamespace?: string;
}
