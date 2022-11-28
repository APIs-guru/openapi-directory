import { SpeakeasyBase } from "../../../internal/utils";
import { Language } from "./language";
/**
 * Language List Response
**/
export declare class LanguagesListResponse extends SpeakeasyBase {
    kind?: string;
    languages?: Language[];
}
