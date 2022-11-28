import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ExportTemplateTemplateLanguageLabelEnum {
    Django = "Django",
    Jinja2 = "Jinja2"
}

export enum ExportTemplateTemplateLanguageValueEnum {
    Django = "django",
    Jinja2 = "jinja2"
}


export class ExportTemplateTemplateLanguage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label: ExportTemplateTemplateLanguageLabelEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: ExportTemplateTemplateLanguageValueEnum;
}


export class ExportTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content_type" })
  contentType: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=file_extension" })
  fileExtension?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=mime_type" })
  mimeType?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=template_code" })
  templateCode: string;

  @SpeakeasyMetadata({ data: "json, name=template_language" })
  templateLanguage?: ExportTemplateTemplateLanguage;
}
