import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SearchEngineOptimization extends SpeakeasyBase {
  @Metadata({ data: "json, name=metaDescription" })
  metaDescription?: string;

  @Metadata({ data: "json, name=slug" })
  slug?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
