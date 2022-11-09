import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GraphTemplateLanguageEnum {
    Django = "django"
,    Jinja2 = "jinja2"
}


export class Graph extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=link" })
  link?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=source" })
  source: string;

  @Metadata({ data: "json, name=template_language" })
  templateLanguage?: GraphTemplateLanguageEnum;

  @Metadata({ data: "json, name=type" })
  type: string;

  @Metadata({ data: "json, name=weight" })
  weight?: number;
}
