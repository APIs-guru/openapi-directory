import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegistrationsPartialUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=registration_id" })
  registrationId: string;
}

export enum RegistrationsPartialUpdateRegistrationAttributesCategoryEnum {
    Analysis = "analysis"
,    Communication = "communication"
,    Data = "data"
,    Hypothesis = "hypothesis"
,    Instrumentation = "instrumentation"
,    MethodsAndMeasures = "methods and measures"
,    Procedure = "procedure"
,    Project = "project"
,    Software = "software"
,    Other = "other"
}


// RegistrationsPartialUpdateRegistrationAttributes
/** 
 * The properties of the registration entity.
**/
export class RegistrationsPartialUpdateRegistrationAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: RegistrationsPartialUpdateRegistrationAttributesCategoryEnum;

  @Metadata({ data: "json, name=collection" })
  collection?: boolean;

  @Metadata({ data: "json, name=current_user_can_comment" })
  currentUserCanComment?: boolean;

  @Metadata({ data: "json, name=current_user_permissions" })
  currentUserPermissions?: string[];

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_modified" })
  dateModified?: Date;

  @Metadata({ data: "json, name=date_registered" })
  dateRegistered?: Date;

  @Metadata({ data: "json, name=date_withdrawn" })
  dateWithdrawn?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=embargo_end_date" })
  embargoEndDate?: Date;

  @Metadata({ data: "json, name=fork" })
  fork?: boolean;

  @Metadata({ data: "json, name=node_license" })
  nodeLicense?: string;

  @Metadata({ data: "json, name=pending_embargo_approval" })
  pendingEmbargoApproval?: boolean;

  @Metadata({ data: "json, name=pending_registration_approval" })
  pendingRegistrationApproval?: boolean;

  @Metadata({ data: "json, name=pending_withdrawal" })
  pendingWithdrawal?: boolean;

  @Metadata({ data: "json, name=preprint" })
  preprint?: boolean;

  @Metadata({ data: "json, name=public" })
  public?: boolean;

  @Metadata({ data: "json, name=registered_meta" })
  registeredMeta?: string;

  @Metadata({ data: "json, name=registration" })
  registration?: boolean;

  @Metadata({ data: "json, name=registration_supplement" })
  registrationSupplement?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=template_from" })
  templateFrom?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=withdrawal_justification" })
  withdrawalJustification?: string;

  @Metadata({ data: "json, name=withdrawn" })
  withdrawn?: boolean;
}


// RegistrationsPartialUpdateRegistrationLinks
/** 
 * URLs to alternative representations of the registrations entity.
**/
export class RegistrationsPartialUpdateRegistrationLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=html" })
  html?: string;

  @Metadata({ data: "json, name=self" })
  self?: string;
}


// RegistrationsPartialUpdateRegistrationRelationships
/** 
 * URLs to other entities or entity collections that have a relationship to the registration entity.
**/
export class RegistrationsPartialUpdateRegistrationRelationships extends SpeakeasyBase {
  @Metadata({ data: "json, name=affiliated_institutions" })
  affiliatedInstitutions?: string;

  @Metadata({ data: "json, name=children" })
  children?: string;

  @Metadata({ data: "json, name=citation" })
  citation?: string;

  @Metadata({ data: "json, name=comments" })
  comments?: string;

  @Metadata({ data: "json, name=contributors" })
  contributors?: string;

  @Metadata({ data: "json, name=files" })
  files?: string;

  @Metadata({ data: "json, name=forks" })
  forks?: string;

  @Metadata({ data: "json, name=identifiers" })
  identifiers?: string;

  @Metadata({ data: "json, name=linked_nodes" })
  linkedNodes?: string;

  @Metadata({ data: "json, name=logs" })
  logs?: string;

  @Metadata({ data: "json, name=node_links" })
  nodeLinks?: string;

  @Metadata({ data: "json, name=parent" })
  parent?: string;

  @Metadata({ data: "json, name=registered_by" })
  registeredBy?: string;

  @Metadata({ data: "json, name=registered_from" })
  registeredFrom?: string;

  @Metadata({ data: "json, name=registration_schema" })
  registrationSchema?: string;

  @Metadata({ data: "json, name=root" })
  root?: string;

  @Metadata({ data: "json, name=view_only_links" })
  viewOnlyLinks?: string;

  @Metadata({ data: "json, name=wikis" })
  wikis?: string;
}


export class RegistrationsPartialUpdateRegistration extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes: RegistrationsPartialUpdateRegistrationAttributes;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=links" })
  links: RegistrationsPartialUpdateRegistrationLinks;

  @Metadata({ data: "json, name=relationships" })
  relationships: RegistrationsPartialUpdateRegistrationRelationships;

  @Metadata({ data: "json, name=type" })
  type: string;
}


export class RegistrationsPartialUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RegistrationsPartialUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: RegistrationsPartialUpdateRegistration;
}


export class RegistrationsPartialUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
