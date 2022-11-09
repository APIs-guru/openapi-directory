import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GrafeasV1SlsaProvenanceZeroTwoSlsaBuilder } from "./grafeasv1slsaprovenancezerotwoslsabuilder";
import { GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation } from "./grafeasv1slsaprovenancezerotwoslsainvocation";
import { GrafeasV1SlsaProvenanceZeroTwoSlsaMaterial } from "./grafeasv1slsaprovenancezerotwoslsamaterial";
import { GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata } from "./grafeasv1slsaprovenancezerotwoslsametadata";


// SlsaProvenanceZeroTwo
/** 
 * See full explanation of fields at slsa.dev/provenance/v0.2.
**/
export class SlsaProvenanceZeroTwo extends SpeakeasyBase {
  @Metadata({ data: "json, name=buildConfig" })
  buildConfig?: Map<string, any>;

  @Metadata({ data: "json, name=buildType" })
  buildType?: string;

  @Metadata({ data: "json, name=builder" })
  builder?: GrafeasV1SlsaProvenanceZeroTwoSlsaBuilder;

  @Metadata({ data: "json, name=invocation" })
  invocation?: GrafeasV1SlsaProvenanceZeroTwoSlsaInvocation;

  @Metadata({ data: "json, name=materials", elemType: shared.GrafeasV1SlsaProvenanceZeroTwoSlsaMaterial })
  materials?: GrafeasV1SlsaProvenanceZeroTwoSlsaMaterial[];

  @Metadata({ data: "json, name=metadata" })
  metadata?: GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata;
}
