import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NodesContributorsPartialUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}

export enum NodesContributorsPartialUpdateContributorAttributesPermissionEnum {
    Read = "read"
,    Write = "write"
,    Admin = "admin"
}


// NodesContributorsPartialUpdateContributorAttributes
/** 
 * The properties of the contributor entity.
**/
export class NodesContributorsPartialUpdateContributorAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=bibliographic" })
  bibliographic?: boolean;

  @Metadata({ data: "json, name=index" })
  index?: number;

  @Metadata({ data: "json, name=permission" })
  permission?: NodesContributorsPartialUpdateContributorAttributesPermissionEnum;

  @Metadata({ data: "json, name=unregistered_contributor" })
  unregisteredContributor?: string;
}


// NodesContributorsPartialUpdateContributorLinks
/** 
 * URLs to alternative representations of the contributor entity.
**/
export class NodesContributorsPartialUpdateContributorLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=self" })
  self?: string;
}


// NodesContributorsPartialUpdateContributorRelationships
/** 
 * URLs to other entities or entity collections that have a relationship to the contributor entity.
**/
export class NodesContributorsPartialUpdateContributorRelationships extends SpeakeasyBase {
  @Metadata({ data: "json, name=node" })
  node: string;

  @Metadata({ data: "json, name=user" })
  user: string;
}


export class NodesContributorsPartialUpdateContributor extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes?: NodesContributorsPartialUpdateContributorAttributes;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=links" })
  links?: NodesContributorsPartialUpdateContributorLinks;

  @Metadata({ data: "json, name=relationships" })
  relationships: NodesContributorsPartialUpdateContributorRelationships;

  @Metadata({ data: "json, name=type" })
  type: string;
}


export class NodesContributorsPartialUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: NodesContributorsPartialUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: NodesContributorsPartialUpdateContributor;
}


export class NodesContributorsPartialUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
