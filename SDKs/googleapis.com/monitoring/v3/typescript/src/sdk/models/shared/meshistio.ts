import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MeshIstio
/** 
 * Istio service scoped to an Istio mesh. Anthos clusters running ASM < 1.6.8 will have their services ingested as this type.
**/
export class MeshIstio extends SpeakeasyBase {
  @Metadata({ data: "json, name=meshUid" })
  meshUid?: string;

  @Metadata({ data: "json, name=serviceName" })
  serviceName?: string;

  @Metadata({ data: "json, name=serviceNamespace" })
  serviceNamespace?: string;
}
