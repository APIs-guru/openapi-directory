import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";



// ProductSetInput
/** 
 * A ProductSet contains Products. A ProductSet can contain a maximum of 1 million reference images. If the limit is exceeded, periodic indexing will fail.
**/
export class ProductSetInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=indexError" })
  indexError?: Status;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// ProductSet
/** 
 * A ProductSet contains Products. A ProductSet can contain a maximum of 1 million reference images. If the limit is exceeded, periodic indexing will fail.
**/
export class ProductSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=indexError" })
  indexError?: Status;

  @SpeakeasyMetadata({ data: "json, name=indexTime" })
  indexTime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
