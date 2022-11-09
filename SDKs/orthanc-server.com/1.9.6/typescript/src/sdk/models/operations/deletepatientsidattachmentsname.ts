import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeletePatientsIdAttachmentsNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class DeletePatientsIdAttachmentsNameHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Match" })
  ifMatch?: string;
}


export class DeletePatientsIdAttachmentsNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeletePatientsIdAttachmentsNamePathParams;

  @Metadata()
  headers: DeletePatientsIdAttachmentsNameHeaders;
}


export class DeletePatientsIdAttachmentsNameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
