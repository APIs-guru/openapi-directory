import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SearchEngineOptimization extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metaDescription" })
  metaDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
