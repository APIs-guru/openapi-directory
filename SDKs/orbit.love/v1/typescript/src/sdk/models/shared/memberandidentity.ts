import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Identity } from "./identity";
import { Member } from "./member";



export class MemberAndIdentity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=identity" })
  identity?: Identity;

  @SpeakeasyMetadata({ data: "json, name=member" })
  member?: Member;
}
