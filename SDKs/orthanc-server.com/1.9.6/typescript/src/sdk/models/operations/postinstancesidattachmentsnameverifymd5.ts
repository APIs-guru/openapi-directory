import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostInstancesIdAttachmentsNameVerifyMd5PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class PostInstancesIdAttachmentsNameVerifyMd5Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostInstancesIdAttachmentsNameVerifyMd5PathParams;
}


export class PostInstancesIdAttachmentsNameVerifyMd5Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postInstancesIdAttachmentsNameVerifyMd5200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
