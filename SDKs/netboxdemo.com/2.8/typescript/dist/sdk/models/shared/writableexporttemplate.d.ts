import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WritableExportTemplateTemplateLanguageEnum {
    Django = "django",
    Jinja2 = "jinja2"
}
export declare class WritableExportTemplateInput extends SpeakeasyBase {
    contentType: string;
    description?: string;
    fileExtension?: string;
    mimeType?: string;
    name: string;
    templateCode: string;
    templateLanguage?: WritableExportTemplateTemplateLanguageEnum;
}
