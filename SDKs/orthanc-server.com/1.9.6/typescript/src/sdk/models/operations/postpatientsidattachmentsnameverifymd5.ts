import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPatientsIdAttachmentsNameVerifyMd5PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class PostPatientsIdAttachmentsNameVerifyMd5Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostPatientsIdAttachmentsNameVerifyMd5PathParams;
}


export class PostPatientsIdAttachmentsNameVerifyMd5Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postPatientsIdAttachmentsNameVerifyMd5200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
