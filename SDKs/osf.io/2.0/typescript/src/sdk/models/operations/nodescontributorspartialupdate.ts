import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NodesContributorsPartialUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}

export enum NodesContributorsPartialUpdateContributorAttributesPermissionEnum {
    Read = "read",
    Write = "write",
    Admin = "admin"
}


// NodesContributorsPartialUpdateContributorAttributesInput
/** 
 * The properties of the contributor entity.
**/
export class NodesContributorsPartialUpdateContributorAttributesInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bibliographic" })
  bibliographic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=permission" })
  permission?: NodesContributorsPartialUpdateContributorAttributesPermissionEnum;
}


// NodesContributorsPartialUpdateContributorRelationshipsInput
/** 
 * URLs to other entities or entity collections that have a relationship to the contributor entity.
**/
export class NodesContributorsPartialUpdateContributorRelationshipsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=user" })
  user: string;
}


export class NodesContributorsPartialUpdateContributorInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: NodesContributorsPartialUpdateContributorAttributesInput;

  @SpeakeasyMetadata({ data: "json, name=relationships" })
  relationships: NodesContributorsPartialUpdateContributorRelationshipsInput;
}


export class NodesContributorsPartialUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: NodesContributorsPartialUpdatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: NodesContributorsPartialUpdateContributorInput;
}


export class NodesContributorsPartialUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
