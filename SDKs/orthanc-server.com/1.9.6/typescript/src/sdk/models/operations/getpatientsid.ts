import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPatientsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetPatientsIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=full" })
  full?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=short" })
  short?: boolean;
}


export class GetPatientsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPatientsIdPathParams;

  @Metadata()
  queryParams: GetPatientsIdQueryParams;
}


export class GetPatientsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getPatientsId200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
