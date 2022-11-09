import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InstanceWebDetails
/** 
 * The Web details resource.
**/
export class InstanceWebDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=launchUrl" })
  launchUrl?: string;

  @Metadata({ data: "json, name=preferred" })
  preferred?: boolean;
}
