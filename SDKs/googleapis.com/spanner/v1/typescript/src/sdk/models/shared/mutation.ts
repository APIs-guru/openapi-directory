import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Delete } from "./delete";
import { Write } from "./write";
import { Write } from "./write";
import { Write } from "./write";
import { Write } from "./write";


// Mutation
/** 
 * A modification to one or more Cloud Spanner rows. Mutations can be applied to a Cloud Spanner database by sending them in a Commit call.
**/
export class Mutation extends SpeakeasyBase {
  @Metadata({ data: "json, name=delete" })
  delete?: Delete;

  @Metadata({ data: "json, name=insert" })
  insert?: Write;

  @Metadata({ data: "json, name=insertOrUpdate" })
  insertOrUpdate?: Write;

  @Metadata({ data: "json, name=replace" })
  replace?: Write;

  @Metadata({ data: "json, name=update" })
  update?: Write;
}
