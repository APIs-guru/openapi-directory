import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileReference } from "./filereference";



// Apk
/** 
 * An Android package file to install.
**/
export class Apk extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: FileReference;

  @SpeakeasyMetadata({ data: "json, name=packageName" })
  packageName?: string;
}
