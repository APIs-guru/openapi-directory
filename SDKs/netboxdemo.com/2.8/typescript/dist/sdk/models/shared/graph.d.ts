import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GraphTemplateLanguageEnum {
    Django = "django",
    Jinja2 = "jinja2"
}
export declare class Graph extends SpeakeasyBase {
    id?: number;
    link?: string;
    name: string;
    source: string;
    templateLanguage?: GraphTemplateLanguageEnum;
    type: string;
    weight?: number;
}
export declare class GraphInput extends SpeakeasyBase {
    link?: string;
    name: string;
    source: string;
    templateLanguage?: GraphTemplateLanguageEnum;
    type: string;
    weight?: number;
}
