import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GraphTemplateLanguageEnum {
    Django = "django",
    Jinja2 = "jinja2"
}


export class Graph extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: string;

  @SpeakeasyMetadata({ data: "json, name=template_language" })
  templateLanguage?: GraphTemplateLanguageEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=weight" })
  weight?: number;
}


export class GraphInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: string;

  @SpeakeasyMetadata({ data: "json, name=template_language" })
  templateLanguage?: GraphTemplateLanguageEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=weight" })
  weight?: number;
}
