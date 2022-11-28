import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeletePatientsIdAttachmentsNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class DeletePatientsIdAttachmentsNameHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Match" })
  ifMatch?: string;
}


export class DeletePatientsIdAttachmentsNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeletePatientsIdAttachmentsNamePathParams;

  @SpeakeasyMetadata()
  headers: DeletePatientsIdAttachmentsNameHeaders;
}


export class DeletePatientsIdAttachmentsNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
