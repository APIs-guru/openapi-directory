import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { KeyValue } from "./keyvalue";


// Product
/** 
 * A Product contains ReferenceImages.
**/
export class Product extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=productCategory" })
  productCategory?: string;

  @Metadata({ data: "json, name=productLabels", elemType: shared.KeyValue })
  productLabels?: KeyValue[];
}
