import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ContainerVersionHeader
/** 
 * Represents a Google Tag Manager Container Version Header.
**/
export class ContainerVersionHeader extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=containerId" })
  containerId?: string;

  @SpeakeasyMetadata({ data: "json, name=containerVersionId" })
  containerVersionId?: string;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=numMacros" })
  numMacros?: string;

  @SpeakeasyMetadata({ data: "json, name=numRules" })
  numRules?: string;

  @SpeakeasyMetadata({ data: "json, name=numTags" })
  numTags?: string;

  @SpeakeasyMetadata({ data: "json, name=numTriggers" })
  numTriggers?: string;

  @SpeakeasyMetadata({ data: "json, name=numVariables" })
  numVariables?: string;
}
