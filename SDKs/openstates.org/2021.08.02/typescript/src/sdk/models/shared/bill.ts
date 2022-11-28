import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BillAbstract } from "./billabstract";
import { BillAction } from "./billaction";
import { BillDocumentOrVersion } from "./billdocumentorversion";
import { Organization } from "./organization";
import { CompactJurisdiction } from "./compactjurisdiction";
import { BillIdentifier } from "./billidentifier";
import { BillTitle } from "./billtitle";
import { Link } from "./link";
import { BillSponsorship } from "./billsponsorship";
import { VoteEvent } from "./voteevent";



export class Bill extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=abstracts", elemType: BillAbstract })
  abstracts?: BillAbstract[];

  @SpeakeasyMetadata({ data: "json, name=actions", elemType: BillAction })
  actions?: BillAction[];

  @SpeakeasyMetadata({ data: "json, name=classification" })
  classification?: string[];

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=documents", elemType: BillDocumentOrVersion })
  documents?: BillDocumentOrVersion[];

  @SpeakeasyMetadata({ data: "json, name=extras" })
  extras?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=first_action_date" })
  firstActionDate?: string;

  @SpeakeasyMetadata({ data: "json, name=from_organization" })
  fromOrganization: Organization;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=identifier" })
  identifier: string;

  @SpeakeasyMetadata({ data: "json, name=jurisdiction" })
  jurisdiction: CompactJurisdiction;

  @SpeakeasyMetadata({ data: "json, name=latest_action_date" })
  latestActionDate?: string;

  @SpeakeasyMetadata({ data: "json, name=latest_action_description" })
  latestActionDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=latest_passage_date" })
  latestPassageDate?: string;

  @SpeakeasyMetadata({ data: "json, name=openstates_url" })
  openstatesUrl: string;

  @SpeakeasyMetadata({ data: "json, name=other_identifiers", elemType: BillIdentifier })
  otherIdentifiers?: BillIdentifier[];

  @SpeakeasyMetadata({ data: "json, name=other_titles", elemType: BillTitle })
  otherTitles?: BillTitle[];

  @SpeakeasyMetadata({ data: "json, name=session" })
  session: string;

  @SpeakeasyMetadata({ data: "json, name=sources", elemType: Link })
  sources?: Link[];

  @SpeakeasyMetadata({ data: "json, name=sponsorships", elemType: BillSponsorship })
  sponsorships?: BillSponsorship[];

  @SpeakeasyMetadata({ data: "json, name=subject" })
  subject?: string[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=versions", elemType: BillDocumentOrVersion })
  versions?: BillDocumentOrVersion[];

  @SpeakeasyMetadata({ data: "json, name=votes", elemType: VoteEvent })
  votes?: VoteEvent[];
}
