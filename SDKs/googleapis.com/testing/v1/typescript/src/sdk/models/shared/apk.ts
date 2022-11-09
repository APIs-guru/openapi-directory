import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FileReference } from "./filereference";


// Apk
/** 
 * An Android package file to install.
**/
export class Apk extends SpeakeasyBase {
  @Metadata({ data: "json, name=location" })
  location?: FileReference;

  @Metadata({ data: "json, name=packageName" })
  packageName?: string;
}
