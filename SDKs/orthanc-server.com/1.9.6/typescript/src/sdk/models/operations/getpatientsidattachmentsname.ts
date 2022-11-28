import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPatientsIdAttachmentsNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GetPatientsIdAttachmentsNameHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class GetPatientsIdAttachmentsNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPatientsIdAttachmentsNamePathParams;

  @SpeakeasyMetadata()
  headers: GetPatientsIdAttachmentsNameHeaders;
}


export class GetPatientsIdAttachmentsNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getPatientsIdAttachmentsName200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
