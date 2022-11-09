import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Identity } from "./identity";
import { Member } from "./member";


export class MemberAndIdentity extends SpeakeasyBase {
  @Metadata({ data: "json, name=identity" })
  identity?: Identity;

  @Metadata({ data: "json, name=member" })
  member?: Member;
}
