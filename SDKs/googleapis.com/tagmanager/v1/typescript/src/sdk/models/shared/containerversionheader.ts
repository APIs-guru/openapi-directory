import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ContainerVersionHeader
/** 
 * Represents a Google Tag Manager Container Version Header.
**/
export class ContainerVersionHeader extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=containerId" })
  containerId?: string;

  @Metadata({ data: "json, name=containerVersionId" })
  containerVersionId?: string;

  @Metadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=numMacros" })
  numMacros?: string;

  @Metadata({ data: "json, name=numRules" })
  numRules?: string;

  @Metadata({ data: "json, name=numTags" })
  numTags?: string;

  @Metadata({ data: "json, name=numTriggers" })
  numTriggers?: string;

  @Metadata({ data: "json, name=numVariables" })
  numVariables?: string;
}
