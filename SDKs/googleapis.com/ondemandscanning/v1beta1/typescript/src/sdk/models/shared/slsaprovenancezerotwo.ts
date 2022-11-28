import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GrafeasV1SlsaProvenanceZeroTwoSlsaBuilder } from "./grafeasv1slsaprovenancezerotwoslsabuilder";
import { GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation } from "./grafeasv1slsaprovenancezerotwoslsainvocation";
import { GrafeasV1SlsaProvenanceZeroTwoSlsaMaterial } from "./grafeasv1slsaprovenancezerotwoslsamaterial";
import { GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata } from "./grafeasv1slsaprovenancezerotwoslsametadata";



// SlsaProvenanceZeroTwo
/** 
 * See full explanation of fields at slsa.dev/provenance/v0.2.
**/
export class SlsaProvenanceZeroTwo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buildConfig" })
  buildConfig?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=buildType" })
  buildType?: string;

  @SpeakeasyMetadata({ data: "json, name=builder" })
  builder?: GrafeasV1SlsaProvenanceZeroTwoSlsaBuilder;

  @SpeakeasyMetadata({ data: "json, name=invocation" })
  invocation?: GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation;

  @SpeakeasyMetadata({ data: "json, name=materials", elemType: GrafeasV1SlsaProvenanceZeroTwoSlsaMaterial })
  materials?: GrafeasV1SlsaProvenanceZeroTwoSlsaMaterial[];

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata;
}
