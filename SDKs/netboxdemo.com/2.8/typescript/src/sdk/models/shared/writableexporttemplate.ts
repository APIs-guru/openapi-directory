import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum WritableExportTemplateTemplateLanguageEnum {
    Django = "django"
,    Jinja2 = "jinja2"
}


export class WritableExportTemplate extends SpeakeasyBase {
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
  templateLanguage?: WritableExportTemplateTemplateLanguageEnum;
}
