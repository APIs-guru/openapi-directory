import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPatientsIdMetadataPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetPatientsIdMetadataQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=expand" })
  expand?: string;
}


export class GetPatientsIdMetadataRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPatientsIdMetadataPathParams;

  @Metadata()
  queryParams: GetPatientsIdMetadataQueryParams;
}


export class GetPatientsIdMetadataResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getPatientsIdMetadata200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
