import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InfoInput
/** 
 * The general information for a form.
**/
export class InfoInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


// Info
/** 
 * The general information for a form.
**/
export class Info extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=documentTitle" })
  documentTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
