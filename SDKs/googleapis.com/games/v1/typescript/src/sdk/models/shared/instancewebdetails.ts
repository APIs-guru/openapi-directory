import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InstanceWebDetails
/** 
 * The Web details resource.
**/
export class InstanceWebDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=launchUrl" })
  launchUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=preferred" })
  preferred?: boolean;
}
