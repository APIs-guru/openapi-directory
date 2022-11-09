import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NodesContributorsCreatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;
}

export enum NodesContributorsCreateContributorAttributesPermissionEnum {
    Read = "read"
,    Write = "write"
,    Admin = "admin"
}


// NodesContributorsCreateContributorAttributes
/** 
 * The properties of the contributor entity.
**/
export class NodesContributorsCreateContributorAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=bibliographic" })
  bibliographic?: boolean;

  @Metadata({ data: "json, name=index" })
  index?: number;

  @Metadata({ data: "json, name=permission" })
  permission?: NodesContributorsCreateContributorAttributesPermissionEnum;

  @Metadata({ data: "json, name=unregistered_contributor" })
  unregisteredContributor?: string;
}


// NodesContributorsCreateContributorLinks
/** 
 * URLs to alternative representations of the contributor entity.
**/
export class NodesContributorsCreateContributorLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=self" })
  self?: string;
}


// NodesContributorsCreateContributorRelationships
/** 
 * URLs to other entities or entity collections that have a relationship to the contributor entity.
**/
export class NodesContributorsCreateContributorRelationships extends SpeakeasyBase {
  @Metadata({ data: "json, name=node" })
  node: string;

  @Metadata({ data: "json, name=user" })
  user: string;
}


export class NodesContributorsCreateContributor extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes?: NodesContributorsCreateContributorAttributes;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=links" })
  links?: NodesContributorsCreateContributorLinks;

  @Metadata({ data: "json, name=relationships" })
  relationships: NodesContributorsCreateContributorRelationships;

  @Metadata({ data: "json, name=type" })
  type: string;
}


export class NodesContributorsCreateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: NodesContributorsCreatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: NodesContributorsCreateContributor;
}


export class NodesContributorsCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
