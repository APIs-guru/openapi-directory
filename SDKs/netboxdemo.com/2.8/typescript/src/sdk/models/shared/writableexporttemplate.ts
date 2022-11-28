import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum WritableExportTemplateTemplateLanguageEnum {
    Django = "django",
    Jinja2 = "jinja2"
}


export class WritableExportTemplateInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content_type" })
  contentType: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=file_extension" })
  fileExtension?: string;

  @SpeakeasyMetadata({ data: "json, name=mime_type" })
  mimeType?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=template_code" })
  templateCode: string;

  @SpeakeasyMetadata({ data: "json, name=template_language" })
  templateLanguage?: WritableExportTemplateTemplateLanguageEnum;
}
