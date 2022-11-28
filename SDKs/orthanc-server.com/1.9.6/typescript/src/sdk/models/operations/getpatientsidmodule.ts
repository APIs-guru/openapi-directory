import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPatientsIdModulePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetPatientsIdModuleQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ignore-length" })
  ignoreLength?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=short" })
  short?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=simplify" })
  simplify?: boolean;
}


export class GetPatientsIdModuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPatientsIdModulePathParams;

  @SpeakeasyMetadata()
  queryParams: GetPatientsIdModuleQueryParams;
}


export class GetPatientsIdModuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getPatientsIdModule200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
