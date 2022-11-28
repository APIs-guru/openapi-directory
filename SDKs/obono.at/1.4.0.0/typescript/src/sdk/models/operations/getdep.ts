import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDepPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=registrierkasseUuid" })
  registrierkasseUuid: string;
}


export class GetDepRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDepPathParams;
}


export class GetDepResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
