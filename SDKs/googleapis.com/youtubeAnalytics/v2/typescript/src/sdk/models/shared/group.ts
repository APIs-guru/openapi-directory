import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GroupContentDetails } from "./groupcontentdetails";
import { Errors } from "./errors";
import { GroupSnippet } from "./groupsnippet";



// Group
/** 
 * A group.
**/
export class Group extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contentDetails" })
  contentDetails?: GroupContentDetails;

  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: Errors;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=snippet" })
  snippet?: GroupSnippet;
}
