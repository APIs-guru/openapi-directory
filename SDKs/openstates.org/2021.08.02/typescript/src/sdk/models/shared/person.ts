import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CurrentRole } from "./currentrole";
import { CompactJurisdiction } from "./compactjurisdiction";
import { Link } from "./link";
import { Office } from "./office";
import { AltIdentifier } from "./altidentifier";
import { AltName } from "./altname";



export class Person extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=birth_date" })
  birthDate: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=current_role" })
  currentRole?: CurrentRole;

  @SpeakeasyMetadata({ data: "json, name=death_date" })
  deathDate: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=extras" })
  extras: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=family_name" })
  familyName: string;

  @SpeakeasyMetadata({ data: "json, name=gender" })
  gender: string;

  @SpeakeasyMetadata({ data: "json, name=given_name" })
  givenName: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image: string;

  @SpeakeasyMetadata({ data: "json, name=jurisdiction" })
  jurisdiction: CompactJurisdiction;

  @SpeakeasyMetadata({ data: "json, name=links", elemType: Link })
  links?: Link[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=offices", elemType: Office })
  offices?: Office[];

  @SpeakeasyMetadata({ data: "json, name=openstates_url" })
  openstatesUrl: string;

  @SpeakeasyMetadata({ data: "json, name=other_identifiers", elemType: AltIdentifier })
  otherIdentifiers?: AltIdentifier[];

  @SpeakeasyMetadata({ data: "json, name=other_names", elemType: AltName })
  otherNames?: AltName[];

  @SpeakeasyMetadata({ data: "json, name=party" })
  party: string;

  @SpeakeasyMetadata({ data: "json, name=sources", elemType: Link })
  sources?: Link[];

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt: Date;
}
