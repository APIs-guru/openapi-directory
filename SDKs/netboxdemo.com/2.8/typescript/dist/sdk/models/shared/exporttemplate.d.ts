import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ExportTemplateTemplateLanguageLabelEnum {
    Django = "Django",
    Jinja2 = "Jinja2"
}
export declare enum ExportTemplateTemplateLanguageValueEnum {
    Django = "django",
    Jinja2 = "jinja2"
}
export declare class ExportTemplateTemplateLanguage extends SpeakeasyBase {
    label: ExportTemplateTemplateLanguageLabelEnum;
    value: ExportTemplateTemplateLanguageValueEnum;
}
export declare class ExportTemplate extends SpeakeasyBase {
    contentType: string;
    description?: string;
    fileExtension?: string;
    id?: number;
    mimeType?: string;
    name: string;
    templateCode: string;
    templateLanguage?: ExportTemplateTemplateLanguage;
}
