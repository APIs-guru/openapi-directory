import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GrafeasV1SlsaProvenanceZeroTwoSlsaCompleteness } from "./grafeasv1slsaprovenancezerotwoslsacompleteness";



// GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata
/** 
 * Other properties of the build.
**/
export class GrafeasV1SlsaProvenanceZeroTwoSlsaMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buildFinishedOn" })
  buildFinishedOn?: string;

  @SpeakeasyMetadata({ data: "json, name=buildInvocationId" })
  buildInvocationId?: string;

  @SpeakeasyMetadata({ data: "json, name=buildStartedOn" })
  buildStartedOn?: string;

  @SpeakeasyMetadata({ data: "json, name=completeness" })
  completeness?: GrafeasV1SlsaProvenanceZeroTwoSlsaCompleteness;

  @SpeakeasyMetadata({ data: "json, name=reproducible" })
  reproducible?: boolean;
}
