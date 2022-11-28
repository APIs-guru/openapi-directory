import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetConsumerV1ServicesIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetConsumerV1ServicesIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetConsumerV1ServicesIdPathParams;
}


export class GetConsumerV1ServicesIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serviceViewModel?: shared.ServiceViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
