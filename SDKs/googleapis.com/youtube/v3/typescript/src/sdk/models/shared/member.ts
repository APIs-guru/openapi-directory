import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MemberSnippet } from "./membersnippet";


// Member
/** 
 * A *member* resource represents a member for a YouTube channel. A member provides recurring monetary support to a creator and receives special benefits.
**/
export class Member extends SpeakeasyBase {
  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=snippet" })
  snippet?: MemberSnippet;
}
