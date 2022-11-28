import { SpeakeasyBase } from "../../../internal/utils";
import { Delete } from "./delete";
import { Write } from "./write";
/**
 * A modification to one or more Cloud Spanner rows. Mutations can be applied to a Cloud Spanner database by sending them in a Commit call.
**/
export declare class Mutation extends SpeakeasyBase {
    delete?: Delete;
    insert?: Write;
    insertOrUpdate?: Write;
    replace?: Write;
    update?: Write;
}
