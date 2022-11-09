import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StackPack
/** 
 * Message containing Stack Pack information.
**/
export class StackPack extends SpeakeasyBase {
  @Metadata({ data: "json, name=descriptions" })
  descriptions?: Map<string, string>;

  @Metadata({ data: "json, name=iconDataURL" })
  iconDataUrl?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
