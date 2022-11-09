import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IstioCanonicalService
/** 
 * Canonical service scoped to an Istio mesh. Anthos clusters running ASM >= 1.6.8 will have their services ingested as this type.
**/
export class IstioCanonicalService extends SpeakeasyBase {
  @Metadata({ data: "json, name=canonicalService" })
  canonicalService?: string;

  @Metadata({ data: "json, name=canonicalServiceNamespace" })
  canonicalServiceNamespace?: string;

  @Metadata({ data: "json, name=meshUid" })
  meshUid?: string;
}
