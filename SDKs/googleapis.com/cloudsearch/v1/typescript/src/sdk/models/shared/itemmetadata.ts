import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContextAttribute } from "./contextattribute";
import { Interaction } from "./interaction";
import { SearchQualityMetadata } from "./searchqualitymetadata";



// ItemMetadata
/** 
 * Available metadata fields for the item.
**/
export class ItemMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=containerName" })
  containerName?: string;

  @SpeakeasyMetadata({ data: "json, name=contentLanguage" })
  contentLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=contextAttributes", elemType: ContextAttribute })
  contextAttributes?: ContextAttribute[];

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=hash" })
  hash?: string;

  @SpeakeasyMetadata({ data: "json, name=interactions", elemType: Interaction })
  interactions?: Interaction[];

  @SpeakeasyMetadata({ data: "json, name=keywords" })
  keywords?: string[];

  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @SpeakeasyMetadata({ data: "json, name=objectType" })
  objectType?: string;

  @SpeakeasyMetadata({ data: "json, name=searchQualityMetadata" })
  searchQualityMetadata?: SearchQualityMetadata;

  @SpeakeasyMetadata({ data: "json, name=sourceRepositoryUrl" })
  sourceRepositoryUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
