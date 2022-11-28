import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Document } from "./document";



// RunQueryResponse
/** 
 * The response for Firestore.RunQuery.
**/
export class RunQueryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=document" })
  document?: Document;

  @SpeakeasyMetadata({ data: "json, name=done" })
  done?: boolean;

  @SpeakeasyMetadata({ data: "json, name=readTime" })
  readTime?: string;

  @SpeakeasyMetadata({ data: "json, name=skippedResults" })
  skippedResults?: number;

  @SpeakeasyMetadata({ data: "json, name=transaction" })
  transaction?: string;
}
