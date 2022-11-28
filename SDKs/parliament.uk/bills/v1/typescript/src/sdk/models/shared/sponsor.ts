import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Member } from "./member";
import { Organisation } from "./organisation";



export class Sponsor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=member" })
  member?: Member;

  @SpeakeasyMetadata({ data: "json, name=organisation" })
  organisation?: Organisation;

  @SpeakeasyMetadata({ data: "json, name=sortOrder" })
  sortOrder?: number;
}
