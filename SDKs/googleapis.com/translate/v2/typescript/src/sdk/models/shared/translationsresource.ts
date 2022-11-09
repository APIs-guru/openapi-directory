import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TranslationsResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=detectedSourceLanguage" })
  detectedSourceLanguage?: string;

  @Metadata({ data: "json, name=model" })
  model?: string;

  @Metadata({ data: "json, name=translatedText" })
  translatedText?: string;
}
