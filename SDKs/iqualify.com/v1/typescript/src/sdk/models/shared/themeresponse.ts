import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ThemeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=filter" })
  filter?: string;

  @Metadata({ data: "json, name=numberOfQuestions" })
  numberOfQuestions?: string;
}
