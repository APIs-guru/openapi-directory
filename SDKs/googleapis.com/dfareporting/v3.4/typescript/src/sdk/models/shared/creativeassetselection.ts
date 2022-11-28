import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Rule } from "./rule";



// CreativeAssetSelection
/** 
 * Encapsulates the list of rules for asset selection and a default asset in case none of the rules match. Applicable to INSTREAM_VIDEO creatives.
**/
export class CreativeAssetSelection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultAssetId" })
  defaultAssetId?: string;

  @SpeakeasyMetadata({ data: "json, name=rules", elemType: Rule })
  rules?: Rule[];
}
