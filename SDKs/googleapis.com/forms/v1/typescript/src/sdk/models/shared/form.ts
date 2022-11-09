import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Info } from "./info";
import { Item } from "./item";
import { FormSettings } from "./formsettings";


// Form
/** 
 * A Google Forms document. A form is created in Drive, and deleting a form or changing its access protections is done via the [Drive API](https://developers.google.com/drive/api/v3/about-sdk).
**/
export class Form extends SpeakeasyBase {
  @Metadata({ data: "json, name=formId" })
  formId?: string;

  @Metadata({ data: "json, name=info" })
  info?: Info;

  @Metadata({ data: "json, name=items", elemType: shared.Item })
  items?: Item[];

  @Metadata({ data: "json, name=linkedSheetId" })
  linkedSheetId?: string;

  @Metadata({ data: "json, name=responderUri" })
  responderUri?: string;

  @Metadata({ data: "json, name=revisionId" })
  revisionId?: string;

  @Metadata({ data: "json, name=settings" })
  settings?: FormSettings;
}
