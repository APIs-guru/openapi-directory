import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Rule
/** 
 * A rule associates an asset with a targeting template for asset-level targeting. Applicable to INSTREAM_VIDEO creatives.
**/
export class Rule extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetId" })
  assetId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=targetingTemplateId" })
  targetingTemplateId?: string;
}
