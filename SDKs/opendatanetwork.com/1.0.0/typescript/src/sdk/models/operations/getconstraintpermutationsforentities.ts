import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetConstraintPermutationsForEntitiesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=variable" })
  variable: string;
}


export class GetConstraintPermutationsForEntitiesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=app_token" })
  appToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=constraint" })
  constraint: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=entity_id" })
  entityId: string;
}


export class GetConstraintPermutationsForEntitiesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-App-Token" })
  xAppToken?: string;
}


export class GetConstraintPermutationsForEntitiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetConstraintPermutationsForEntitiesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetConstraintPermutationsForEntitiesQueryParams;

  @SpeakeasyMetadata()
  headers: GetConstraintPermutationsForEntitiesHeaders;
}


export class GetConstraintPermutationsForEntitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
