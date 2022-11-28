import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Istio service scoped to an Istio mesh. Anthos clusters running ASM < 1.6.8 will have their services ingested as this type.
**/
export declare class MeshIstio extends SpeakeasyBase {
    meshUid?: string;
    serviceName?: string;
    serviceNamespace?: string;
}
