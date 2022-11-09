import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum FindTheRelativesOfAnEntityRelationEnum {
    Parent = "parent"
,    Child = "child"
,    Sibling = "sibling"
,    Peer = "peer"
}


export class FindTheRelativesOfAnEntityPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=relation" })
  relation: FindTheRelativesOfAnEntityRelationEnum;
}


export class FindTheRelativesOfAnEntityQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=app_token" })
  appToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=entity_id" })
  entityId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=variable_id" })
  variableId?: string;
}


export class FindTheRelativesOfAnEntityHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-App-Token" })
  xAppToken?: string;
}


export class FindTheRelativesOfAnEntityRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FindTheRelativesOfAnEntityPathParams;

  @Metadata()
  queryParams: FindTheRelativesOfAnEntityQueryParams;

  @Metadata()
  headers: FindTheRelativesOfAnEntityHeaders;
}


export class FindTheRelativesOfAnEntityResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
