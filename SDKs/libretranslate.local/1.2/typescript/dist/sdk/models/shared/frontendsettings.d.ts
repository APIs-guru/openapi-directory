import { SpeakeasyBase } from "../../../internal/utils";
export declare class FrontendSettingsLanguageSource extends SpeakeasyBase {
    code?: string;
    name?: string;
}
export declare class FrontendSettingsLanguageTarget extends SpeakeasyBase {
    code?: string;
    name?: string;
}
export declare class FrontendSettingsLanguage extends SpeakeasyBase {
    source?: FrontendSettingsLanguageSource;
    target?: FrontendSettingsLanguageTarget;
}
export declare class FrontendSettings extends SpeakeasyBase {
    charLimit?: number;
    frontendTimeout?: number;
    language?: FrontendSettingsLanguage;
}
