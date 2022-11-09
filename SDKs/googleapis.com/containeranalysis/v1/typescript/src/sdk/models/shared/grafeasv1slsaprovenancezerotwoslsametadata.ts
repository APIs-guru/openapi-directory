import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GrafeasV1SlsaProvenanceZeroTwoSlsaCompleteness } from "./grafeasv1slsaprovenancezerotwoslsacompleteness";


// GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata
/** 
 * Other properties of the build.
**/
export class GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=buildFinishedOn" })
  buildFinishedOn?: string;

  @Metadata({ data: "json, name=buildInvocationId" })
  buildInvocationId?: string;

  @Metadata({ data: "json, name=buildStartedOn" })
  buildStartedOn?: string;

  @Metadata({ data: "json, name=completeness" })
  completeness?: GrafeasV1SlsaProvenanceZeroTwoSlsaCompleteness;

  @Metadata({ data: "json, name=reproducible" })
  reproducible?: boolean;
}
