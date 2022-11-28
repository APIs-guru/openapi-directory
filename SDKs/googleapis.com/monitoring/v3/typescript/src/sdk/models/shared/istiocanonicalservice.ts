import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IstioCanonicalService
/** 
 * Canonical service scoped to an Istio mesh. Anthos clusters running ASM >= 1.6.8 will have their services ingested as this type.
**/
export class IstioCanonicalService extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=canonicalService" })
  canonicalService?: string;

  @SpeakeasyMetadata({ data: "json, name=canonicalServiceNamespace" })
  canonicalServiceNamespace?: string;

  @SpeakeasyMetadata({ data: "json, name=meshUid" })
  meshUid?: string;
}
