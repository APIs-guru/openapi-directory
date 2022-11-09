import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BillAbstract } from "./billabstract";
import { BillAction } from "./billaction";
import { BillDocumentOrVersion } from "./billdocumentorversion";
import { Organization } from "./organization";
import { CompactJurisdiction } from "./compactjurisdiction";
import { BillIdentifier } from "./billidentifier";
import { BillTitle } from "./billtitle";
import { Link } from "./link";
import { BillSponsorship } from "./billsponsorship";
import { BillDocumentOrVersion } from "./billdocumentorversion";
import { VoteEvent } from "./voteevent";


export class Bill extends SpeakeasyBase {
  @Metadata({ data: "json, name=abstracts", elemType: shared.BillAbstract })
  abstracts?: BillAbstract[];

  @Metadata({ data: "json, name=actions", elemType: shared.BillAction })
  actions?: BillAction[];

  @Metadata({ data: "json, name=classification" })
  classification?: string[];

  @Metadata({ data: "json, name=created_at" })
  createdAt: Date;

  @Metadata({ data: "json, name=documents", elemType: shared.BillDocumentOrVersion })
  documents?: BillDocumentOrVersion[];

  @Metadata({ data: "json, name=extras" })
  extras?: Map<string, any>;

  @Metadata({ data: "json, name=first_action_date" })
  firstActionDate?: string;

  @Metadata({ data: "json, name=from_organization" })
  fromOrganization: Organization;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=identifier" })
  identifier: string;

  @Metadata({ data: "json, name=jurisdiction" })
  jurisdiction: CompactJurisdiction;

  @Metadata({ data: "json, name=latest_action_date" })
  latestActionDate?: string;

  @Metadata({ data: "json, name=latest_action_description" })
  latestActionDescription?: string;

  @Metadata({ data: "json, name=latest_passage_date" })
  latestPassageDate?: string;

  @Metadata({ data: "json, name=openstates_url" })
  openstatesUrl: string;

  @Metadata({ data: "json, name=other_identifiers", elemType: shared.BillIdentifier })
  otherIdentifiers?: BillIdentifier[];

  @Metadata({ data: "json, name=other_titles", elemType: shared.BillTitle })
  otherTitles?: BillTitle[];

  @Metadata({ data: "json, name=session" })
  session: string;

  @Metadata({ data: "json, name=sources", elemType: shared.Link })
  sources?: Link[];

  @Metadata({ data: "json, name=sponsorships", elemType: shared.BillSponsorship })
  sponsorships?: BillSponsorship[];

  @Metadata({ data: "json, name=subject" })
  subject?: string[];

  @Metadata({ data: "json, name=title" })
  title: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @Metadata({ data: "json, name=versions", elemType: shared.BillDocumentOrVersion })
  versions?: BillDocumentOrVersion[];

  @Metadata({ data: "json, name=votes", elemType: shared.VoteEvent })
  votes?: VoteEvent[];
}
