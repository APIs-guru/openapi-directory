import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GroupContentDetails } from "./groupcontentdetails";
import { Errors } from "./errors";
import { GroupSnippet } from "./groupsnippet";


// Group
/** 
 * A group.
**/
export class Group extends SpeakeasyBase {
  @Metadata({ data: "json, name=contentDetails" })
  contentDetails?: GroupContentDetails;

  @Metadata({ data: "json, name=errors" })
  errors?: Errors;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=snippet" })
  snippet?: GroupSnippet;
}
