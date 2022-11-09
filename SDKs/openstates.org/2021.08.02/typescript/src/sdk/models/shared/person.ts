import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CurrentRole } from "./currentrole";
import { CompactJurisdiction } from "./compactjurisdiction";
import { Link } from "./link";
import { Office } from "./office";
import { AltIdentifier } from "./altidentifier";
import { AltName } from "./altname";
import { Link } from "./link";


export class Person extends SpeakeasyBase {
  @Metadata({ data: "json, name=birth_date" })
  birthDate: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt: Date;

  @Metadata({ data: "json, name=current_role" })
  currentRole?: CurrentRole;

  @Metadata({ data: "json, name=death_date" })
  deathDate: string;

  @Metadata({ data: "json, name=email" })
  email: string;

  @Metadata({ data: "json, name=extras" })
  extras: Map<string, any>;

  @Metadata({ data: "json, name=family_name" })
  familyName: string;

  @Metadata({ data: "json, name=gender" })
  gender: string;

  @Metadata({ data: "json, name=given_name" })
  givenName: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=image" })
  image: string;

  @Metadata({ data: "json, name=jurisdiction" })
  jurisdiction: CompactJurisdiction;

  @Metadata({ data: "json, name=links", elemType: shared.Link })
  links?: Link[];

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=offices", elemType: shared.Office })
  offices?: Office[];

  @Metadata({ data: "json, name=openstates_url" })
  openstatesUrl: string;

  @Metadata({ data: "json, name=other_identifiers", elemType: shared.AltIdentifier })
  otherIdentifiers?: AltIdentifier[];

  @Metadata({ data: "json, name=other_names", elemType: shared.AltName })
  otherNames?: AltName[];

  @Metadata({ data: "json, name=party" })
  party: string;

  @Metadata({ data: "json, name=sources", elemType: shared.Link })
  sources?: Link[];

  @Metadata({ data: "json, name=updated_at" })
  updatedAt: Date;
}
