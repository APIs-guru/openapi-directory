import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Delete } from "./delete";
import { Write } from "./write";



// Mutation
/** 
 * A modification to one or more Cloud Spanner rows. Mutations can be applied to a Cloud Spanner database by sending them in a Commit call.
**/
export class Mutation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delete" })
  delete?: Delete;

  @SpeakeasyMetadata({ data: "json, name=insert" })
  insert?: Write;

  @SpeakeasyMetadata({ data: "json, name=insertOrUpdate" })
  insertOrUpdate?: Write;

  @SpeakeasyMetadata({ data: "json, name=replace" })
  replace?: Write;

  @SpeakeasyMetadata({ data: "json, name=update" })
  update?: Write;
}
