import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Member } from "./member";
import { Organisation } from "./organisation";


export class Sponsor extends SpeakeasyBase {
  @Metadata({ data: "json, name=member" })
  member?: Member;

  @Metadata({ data: "json, name=organisation" })
  organisation?: Organisation;

  @Metadata({ data: "json, name=sortOrder" })
  sortOrder?: number;
}
