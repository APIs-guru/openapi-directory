import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Organization } from "./organization";
import { CompactPerson } from "./compactperson";


export class BillSponsorship extends SpeakeasyBase {
  @Metadata({ data: "json, name=classification" })
  classification: string;

  @Metadata({ data: "json, name=entity_type" })
  entityType: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=organization" })
  organization?: Organization;

  @Metadata({ data: "json, name=person" })
  person?: CompactPerson;

  @Metadata({ data: "json, name=primary" })
  primary: boolean;
}
