import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostStudiesIdAttachmentsNameVerifyMd5PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class PostStudiesIdAttachmentsNameVerifyMd5Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostStudiesIdAttachmentsNameVerifyMd5PathParams;
}


export class PostStudiesIdAttachmentsNameVerifyMd5Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postStudiesIdAttachmentsNameVerifyMd5200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
