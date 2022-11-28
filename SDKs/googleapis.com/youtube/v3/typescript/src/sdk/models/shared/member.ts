import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MemberSnippet } from "./membersnippet";



// Member
/** 
 * A *member* resource represents a member for a YouTube channel. A member provides recurring monetary support to a creator and receives special benefits.
**/
export class Member extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=snippet" })
  snippet?: MemberSnippet;
}
