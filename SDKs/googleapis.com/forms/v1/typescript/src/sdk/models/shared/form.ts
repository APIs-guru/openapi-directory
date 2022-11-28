import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Info } from "./info";
import { Item } from "./item";
import { FormSettings } from "./formsettings";
import { InfoInput } from "./info";
import { ItemInput } from "./item";



// Form
/** 
 * A Google Forms document. A form is created in Drive, and deleting a form or changing its access protections is done via the [Drive API](https://developers.google.com/drive/api/v3/about-sdk).
**/
export class Form extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=formId" })
  formId?: string;

  @SpeakeasyMetadata({ data: "json, name=info" })
  info?: Info;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: Item })
  items?: Item[];

  @SpeakeasyMetadata({ data: "json, name=linkedSheetId" })
  linkedSheetId?: string;

  @SpeakeasyMetadata({ data: "json, name=responderUri" })
  responderUri?: string;

  @SpeakeasyMetadata({ data: "json, name=revisionId" })
  revisionId?: string;

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: FormSettings;
}


// FormInput
/** 
 * A Google Forms document. A form is created in Drive, and deleting a form or changing its access protections is done via the [Drive API](https://developers.google.com/drive/api/v3/about-sdk).
**/
export class FormInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=info" })
  info?: InfoInput;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: ItemInput })
  items?: ItemInput[];

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: FormSettings;
}
