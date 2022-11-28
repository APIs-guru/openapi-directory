import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResultDebugInfo } from "./resultdebuginfo";
import { Metadata } from "./metadata";
import { Snippet } from "./snippet";



// SearchResult
/** 
 * Results containing indexed information for a document.
**/
export class SearchResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusteredResults", elemType: SearchResult })
  clusteredResults?: SearchResult[];

  @SpeakeasyMetadata({ data: "json, name=debugInfo" })
  debugInfo?: ResultDebugInfo;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Metadata;

  @SpeakeasyMetadata({ data: "json, name=snippet" })
  snippet?: Snippet;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
