import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OutputConfig } from "./outputconfig";

export enum ExportAssetsRequestContentTypeEnum {
    ContentTypeUnspecified = "CONTENT_TYPE_UNSPECIFIED"
,    Resource = "RESOURCE"
,    IamPolicy = "IAM_POLICY"
}


// ExportAssetsRequest
/** 
 * Export asset request.
**/
export class ExportAssetsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetTypes" })
  assetTypes?: string[];

  @Metadata({ data: "json, name=contentType" })
  contentType?: ExportAssetsRequestContentTypeEnum;

  @Metadata({ data: "json, name=outputConfig" })
  outputConfig?: OutputConfig;

  @Metadata({ data: "json, name=readTime" })
  readTime?: string;
}
