import { SpeakeasyBase } from "../../../internal/utils";
import { Info } from "./info";
import { Item } from "./item";
import { FormSettings } from "./formsettings";
import { InfoInput } from "./info";
import { ItemInput } from "./item";
/**
 * A Google Forms document. A form is created in Drive, and deleting a form or changing its access protections is done via the [Drive API](https://developers.google.com/drive/api/v3/about-sdk).
**/
export declare class Form extends SpeakeasyBase {
    formId?: string;
    info?: Info;
    items?: Item[];
    linkedSheetId?: string;
    responderUri?: string;
    revisionId?: string;
    settings?: FormSettings;
}
/**
 * A Google Forms document. A form is created in Drive, and deleting a form or changing its access protections is done via the [Drive API](https://developers.google.com/drive/api/v3/about-sdk).
**/
export declare class FormInput extends SpeakeasyBase {
    info?: InfoInput;
    items?: ItemInput[];
    settings?: FormSettings;
}
