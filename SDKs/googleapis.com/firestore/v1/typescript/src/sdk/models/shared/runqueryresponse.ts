import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Document } from "./document";


// RunQueryResponse
/** 
 * The response for Firestore.RunQuery.
**/
export class RunQueryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=document" })
  document?: Document;

  @Metadata({ data: "json, name=done" })
  done?: boolean;

  @Metadata({ data: "json, name=readTime" })
  readTime?: string;

  @Metadata({ data: "json, name=skippedResults" })
  skippedResults?: number;

  @Metadata({ data: "json, name=transaction" })
  transaction?: string;
}
