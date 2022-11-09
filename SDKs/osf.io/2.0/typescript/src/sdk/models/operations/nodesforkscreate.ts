import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NodesForksCreatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;
}

export enum NodesForksCreateNodeAttributesCategoryEnum {
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


// NodesForksCreateNodeAttributes
/** 
 * The properties of the node entity.
**/
export class NodesForksCreateNodeAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category: NodesForksCreateNodeAttributesCategoryEnum;

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

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=fork" })
  fork?: boolean;

  @Metadata({ data: "json, name=forked_date" })
  forkedDate?: Date;

  @Metadata({ data: "json, name=node_license" })
  nodeLicense?: string;

  @Metadata({ data: "json, name=preprint" })
  preprint?: boolean;

  @Metadata({ data: "json, name=public" })
  public?: boolean;

  @Metadata({ data: "json, name=registration" })
  registration?: boolean;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=template_from" })
  templateFrom?: string;

  @Metadata({ data: "json, name=title" })
  title: string;
}


// NodesForksCreateNodeLinks
/** 
 * URLs to alternative representations of the node entity.
**/
export class NodesForksCreateNodeLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=html" })
  html?: string;

  @Metadata({ data: "json, name=self" })
  self?: string;
}


// NodesForksCreateNodeRelationships
/** 
 * URLs to other entities or entity collections that have a relationship to the node entity.
**/
export class NodesForksCreateNodeRelationships extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=draft_registrations" })
  draftRegistrations?: string;

  @Metadata({ data: "json, name=files" })
  files?: string;

  @Metadata({ data: "json, name=forked_from" })
  forkedFrom?: string;

  @Metadata({ data: "json, name=forks" })
  forks?: string;

  @Metadata({ data: "json, name=identifiers" })
  identifiers?: string;

  @Metadata({ data: "json, name=license" })
  license?: string;

  @Metadata({ data: "json, name=linked_nodes" })
  linkedNodes?: string;

  @Metadata({ data: "json, name=logs" })
  logs?: string;

  @Metadata({ data: "json, name=node_links" })
  nodeLinks?: string;

  @Metadata({ data: "json, name=parent" })
  parent?: string;

  @Metadata({ data: "json, name=preprints" })
  preprints?: string;

  @Metadata({ data: "json, name=registrations" })
  registrations?: string;

  @Metadata({ data: "json, name=root" })
  root?: string;

  @Metadata({ data: "json, name=template_node" })
  templateNode?: string;

  @Metadata({ data: "json, name=view_only_links" })
  viewOnlyLinks?: string;

  @Metadata({ data: "json, name=wikis" })
  wikis?: string;
}


export class NodesForksCreateNode extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes: NodesForksCreateNodeAttributes;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=links" })
  links?: NodesForksCreateNodeLinks;

  @Metadata({ data: "json, name=relationships" })
  relationships?: NodesForksCreateNodeRelationships;

  @Metadata({ data: "json, name=type" })
  type: string;
}


export class NodesForksCreateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: NodesForksCreatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: NodesForksCreateNode;
}


export class NodesForksCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
