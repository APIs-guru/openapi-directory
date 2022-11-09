import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CurrentRole } from "./currentrole";


export class CompactPerson extends SpeakeasyBase {
  @Metadata({ data: "json, name=current_role" })
  currentRole?: CurrentRole;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=party" })
  party: string;
}
