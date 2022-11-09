import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GrafeasV1SlsaProvenanceZeroTwoSlsaCompleteness
/** 
 * Indicates that the builder claims certain fields in this message to be complete.
**/
export class GrafeasV1SlsaProvenanceZeroTwoSlsaCompleteness extends SpeakeasyBase {
  @Metadata({ data: "json, name=environment" })
  environment?: boolean;

  @Metadata({ data: "json, name=materials" })
  materials?: boolean;

  @Metadata({ data: "json, name=parameters" })
  parameters?: boolean;
}
