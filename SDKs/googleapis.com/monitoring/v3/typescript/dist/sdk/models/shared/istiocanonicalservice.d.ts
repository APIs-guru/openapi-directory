import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Canonical service scoped to an Istio mesh. Anthos clusters running ASM >= 1.6.8 will have their services ingested as this type.
**/
export declare class IstioCanonicalService extends SpeakeasyBase {
    canonicalService?: string;
    canonicalServiceNamespace?: string;
    meshUid?: string;
}
