import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaCompleteness
/** 
 * Indicates that the builder claims certain fields in this message to be complete.
**/
export class GoogleDevtoolsContaineranalysisV1alpha1SlsaProvenanceZeroTwoSlsaCompleteness extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: boolean;

  @SpeakeasyMetadata({ data: "json, name=materials" })
  materials?: boolean;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: boolean;
}
