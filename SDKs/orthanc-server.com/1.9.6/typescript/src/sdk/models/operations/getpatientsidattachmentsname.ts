import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPatientsIdAttachmentsNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class GetPatientsIdAttachmentsNameHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-None-Match" })
  ifNoneMatch?: string;
}


export class GetPatientsIdAttachmentsNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPatientsIdAttachmentsNamePathParams;

  @Metadata()
  headers: GetPatientsIdAttachmentsNameHeaders;
}


export class GetPatientsIdAttachmentsNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getPatientsIdAttachmentsName200ApplicationJsonAny?: any;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
