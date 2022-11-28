import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StackPack
/** 
 * Message containing Stack Pack information.
**/
export class StackPack extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=descriptions" })
  descriptions?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=iconDataURL" })
  iconDataUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
