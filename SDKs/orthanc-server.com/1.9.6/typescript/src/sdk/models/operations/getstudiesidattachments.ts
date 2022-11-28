import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetStudiesIdAttachmentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetStudiesIdAttachmentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetStudiesIdAttachmentsPathParams;
}


export class GetStudiesIdAttachmentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getStudiesIdAttachments200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
