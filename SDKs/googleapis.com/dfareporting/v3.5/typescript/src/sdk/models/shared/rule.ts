import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Rule
/** 
 * A rule associates an asset with a targeting template for asset-level targeting. Applicable to INSTREAM_VIDEO creatives.
**/
export class Rule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetId" })
  assetId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=targetingTemplateId" })
  targetingTemplateId?: string;
}
