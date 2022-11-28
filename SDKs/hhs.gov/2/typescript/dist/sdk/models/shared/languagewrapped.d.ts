import { SpeakeasyBase } from "../../../internal/utils";
import { Meta } from "./meta";
import { Language } from "./language";
export declare class LanguageWrapped extends SpeakeasyBase {
    callback?: string;
    meta?: Meta;
    results?: Language[];
}
