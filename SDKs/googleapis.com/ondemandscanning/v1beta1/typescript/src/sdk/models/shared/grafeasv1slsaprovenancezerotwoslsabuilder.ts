import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GrafeasV1SlsaProvenanceZeroTwoSlsaBuilder
/** 
 * Identifies the entity that executed the recipe, which is trusted to have correctly performed the operation and populated this provenance.
**/
export class GrafeasV1SlsaProvenanceZeroTwoSlsaBuilder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
