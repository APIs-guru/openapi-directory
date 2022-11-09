import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ExportTemplateTemplateLanguageLabelEnum {
    Django = "Django"
,    Jinja2 = "Jinja2"
}

export enum ExportTemplateTemplateLanguageValueEnum {
    Django = "django"
,    Jinja2 = "jinja2"
}


export class ExportTemplateTemplateLanguage extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label: ExportTemplateTemplateLanguageLabelEnum;

  @Metadata({ data: "json, name=value" })
  value: ExportTemplateTemplateLanguageValueEnum;
}


export class ExportTemplate extends SpeakeasyBase {
  @Metadata({ data: "json, name=content_type" })
  contentType: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=file_extension" })
  fileExtension?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=mime_type" })
  mimeType?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=template_code" })
  templateCode: string;

  @Metadata({ data: "json, name=template_language" })
  templateLanguage?: ExportTemplateTemplateLanguage;
}
