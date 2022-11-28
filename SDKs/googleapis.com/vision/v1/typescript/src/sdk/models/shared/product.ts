import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyValue } from "./keyvalue";



// Product
/** 
 * A Product contains ReferenceImages.
**/
export class Product extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=productCategory" })
  productCategory?: string;

  @SpeakeasyMetadata({ data: "json, name=productLabels", elemType: KeyValue })
  productLabels?: KeyValue[];
}
