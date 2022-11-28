import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ThemeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=numberOfQuestions" })
  numberOfQuestions?: string;
}
