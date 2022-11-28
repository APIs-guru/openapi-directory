import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NodesContributorsCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;
}

export enum NodesContributorsCreateContributorAttributesPermissionEnum {
    Read = "read",
    Write = "write",
    Admin = "admin"
}


// NodesContributorsCreateContributorAttributesInput
/** 
 * The properties of the contributor entity.
**/
export class NodesContributorsCreateContributorAttributesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bibliographic" })
  bibliographic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=permission" })
  permission?: NodesContributorsCreateContributorAttributesPermissionEnum;
}


// NodesContributorsCreateContributorRelationshipsInput
/** 
 * URLs to other entities or entity collections that have a relationship to the contributor entity.
**/
export class NodesContributorsCreateContributorRelationshipsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=user" })
  user: string;
}


export class NodesContributorsCreateContributorInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: NodesContributorsCreateContributorAttributesInput;

  @SpeakeasyMetadata({ data: "json, name=relationships" })
  relationships: NodesContributorsCreateContributorRelationshipsInput;
}


export class NodesContributorsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: NodesContributorsCreatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: NodesContributorsCreateContributorInput;
}


export class NodesContributorsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
