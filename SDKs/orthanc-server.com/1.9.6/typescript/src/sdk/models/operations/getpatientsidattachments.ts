import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPatientsIdAttachmentsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetPatientsIdAttachmentsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPatientsIdAttachmentsPathParams;
}


export class GetPatientsIdAttachmentsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getPatientsIdAttachments200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
