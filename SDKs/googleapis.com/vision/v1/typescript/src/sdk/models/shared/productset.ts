import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Status } from "./status";


// ProductSet
/** 
 * A ProductSet contains Products. A ProductSet can contain a maximum of 1 million reference images. If the limit is exceeded, periodic indexing will fail.
**/
export class ProductSet extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=indexError" })
  indexError?: Status;

  @Metadata({ data: "json, name=indexTime" })
  indexTime?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
