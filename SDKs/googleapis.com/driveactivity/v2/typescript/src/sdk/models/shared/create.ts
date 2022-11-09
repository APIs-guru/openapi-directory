import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Copy } from "./copy";


// Create
/** 
 * An object was created.
**/
export class Create extends SpeakeasyBase {
  @Metadata({ data: "json, name=copy" })
  copy?: Copy;

  @Metadata({ data: "json, name=new" })
  new?: Map<string, any>;

  @Metadata({ data: "json, name=upload" })
  upload?: Map<string, any>;
}
