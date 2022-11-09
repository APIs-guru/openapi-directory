import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ContextAttribute } from "./contextattribute";
import { Interaction } from "./interaction";
import { SearchQualityMetadata } from "./searchqualitymetadata";


// ItemMetadata
/** 
 * Available metadata fields for the item.
**/
export class ItemMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=containerName" })
  containerName?: string;

  @Metadata({ data: "json, name=contentLanguage" })
  contentLanguage?: string;

  @Metadata({ data: "json, name=contextAttributes", elemType: shared.ContextAttribute })
  contextAttributes?: ContextAttribute[];

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=hash" })
  hash?: string;

  @Metadata({ data: "json, name=interactions", elemType: shared.Interaction })
  interactions?: Interaction[];

  @Metadata({ data: "json, name=keywords" })
  keywords?: string[];

  @Metadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @Metadata({ data: "json, name=objectType" })
  objectType?: string;

  @Metadata({ data: "json, name=searchQualityMetadata" })
  searchQualityMetadata?: SearchQualityMetadata;

  @Metadata({ data: "json, name=sourceRepositoryUrl" })
  sourceRepositoryUrl?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
