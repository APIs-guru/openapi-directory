import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetContainerSnippetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=snippet" })
  snippet?: string;
}
