import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Organization } from "./organization";
/**
 * This resource represents a custom app.
**/
export declare class CustomApp extends SpeakeasyBase {
    languageCode?: string;
    organizations?: Organization[];
    packageName?: string;
    title?: string;
}
