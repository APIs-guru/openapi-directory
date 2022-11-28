import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TranslationsResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detectedSourceLanguage" })
  detectedSourceLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=model" })
  model?: string;

  @SpeakeasyMetadata({ data: "json, name=translatedText" })
  translatedText?: string;
}
