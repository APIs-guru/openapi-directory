import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPatientsIdMetadataPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetPatientsIdMetadataQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expand" })
  expand?: string;
}


export class GetPatientsIdMetadataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPatientsIdMetadataPathParams;

  @SpeakeasyMetadata()
  queryParams: GetPatientsIdMetadataQueryParams;
}


export class GetPatientsIdMetadataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getPatientsIdMetadata200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
