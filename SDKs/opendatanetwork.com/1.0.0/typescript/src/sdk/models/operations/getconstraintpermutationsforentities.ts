import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetConstraintPermutationsForEntitiesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=variable" })
  variable: string;
}


export class GetConstraintPermutationsForEntitiesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=app_token" })
  appToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=constraint" })
  constraint: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=entity_id" })
  entityId: string;
}


export class GetConstraintPermutationsForEntitiesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-App-Token" })
  xAppToken?: string;
}


export class GetConstraintPermutationsForEntitiesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetConstraintPermutationsForEntitiesPathParams;

  @Metadata()
  queryParams: GetConstraintPermutationsForEntitiesQueryParams;

  @Metadata()
  headers: GetConstraintPermutationsForEntitiesHeaders;
}


export class GetConstraintPermutationsForEntitiesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
