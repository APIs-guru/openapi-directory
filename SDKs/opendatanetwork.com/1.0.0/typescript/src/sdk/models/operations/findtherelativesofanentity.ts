import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum FindTheRelativesOfAnEntityRelationEnum {
    Parent = "parent",
    Child = "child",
    Sibling = "sibling",
    Peer = "peer"
}


export class FindTheRelativesOfAnEntityPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=relation" })
  relation: FindTheRelativesOfAnEntityRelationEnum;
}


export class FindTheRelativesOfAnEntityQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=app_token" })
  appToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=entity_id" })
  entityId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=variable_id" })
  variableId?: string;
}


export class FindTheRelativesOfAnEntityHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-App-Token" })
  xAppToken?: string;
}


export class FindTheRelativesOfAnEntityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FindTheRelativesOfAnEntityPathParams;

  @SpeakeasyMetadata()
  queryParams: FindTheRelativesOfAnEntityQueryParams;

  @SpeakeasyMetadata()
  headers: FindTheRelativesOfAnEntityHeaders;
}


export class FindTheRelativesOfAnEntityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
