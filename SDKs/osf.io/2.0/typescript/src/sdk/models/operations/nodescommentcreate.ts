import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NodesCommentCreatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;
}


// NodesCommentCreateCommentAttributes
/** 
 * The properties of the comment entity.
**/
export class NodesCommentCreateCommentAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=can_edit" })
  canEdit?: boolean;

  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_modified" })
  dateModified?: Date;

  @Metadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @Metadata({ data: "json, name=has_children" })
  hasChildren?: boolean;

  @Metadata({ data: "json, name=has_report" })
  hasReport?: boolean;

  @Metadata({ data: "json, name=is_abuse" })
  isAbuse?: boolean;

  @Metadata({ data: "json, name=is_ham" })
  isHam?: boolean;

  @Metadata({ data: "json, name=modified" })
  modified?: boolean;

  @Metadata({ data: "json, name=page" })
  page?: string;
}


// NodesCommentCreateCommentLinks
/** 
 * URLs to alternative representations of the comment entity.
**/
export class NodesCommentCreateCommentLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=self" })
  self?: string;
}


// NodesCommentCreateCommentRelationships
/** 
 * URLs to other entities or entity collections that have a relationship to the comment entity.
**/
export class NodesCommentCreateCommentRelationships extends SpeakeasyBase {
  @Metadata({ data: "json, name=node" })
  node?: string;

  @Metadata({ data: "json, name=replies" })
  replies?: string;

  @Metadata({ data: "json, name=reports" })
  reports?: string;

  @Metadata({ data: "json, name=target" })
  target?: string;

  @Metadata({ data: "json, name=user" })
  user?: string;
}


export class NodesCommentCreateComment extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes?: NodesCommentCreateCommentAttributes;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=links" })
  links?: NodesCommentCreateCommentLinks;

  @Metadata({ data: "json, name=relationships" })
  relationships?: NodesCommentCreateCommentRelationships;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class NodesCommentCreateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: NodesCommentCreatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: NodesCommentCreateComment;
}


export class NodesCommentCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
