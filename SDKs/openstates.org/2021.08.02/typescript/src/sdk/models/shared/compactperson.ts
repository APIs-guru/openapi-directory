import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CurrentRole } from "./currentrole";



export class CompactPerson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current_role" })
  currentRole?: CurrentRole;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=party" })
  party: string;
}
