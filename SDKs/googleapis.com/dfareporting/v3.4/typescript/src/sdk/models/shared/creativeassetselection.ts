import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Rule } from "./rule";


// CreativeAssetSelection
/** 
 * Encapsulates the list of rules for asset selection and a default asset in case none of the rules match. Applicable to INSTREAM_VIDEO creatives.
**/
export class CreativeAssetSelection extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultAssetId" })
  defaultAssetId?: string;

  @Metadata({ data: "json, name=rules", elemType: shared.Rule })
  rules?: Rule[];
}
