import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetConsumerV1ServicesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetConsumerV1ServicesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetConsumerV1ServicesIdPathParams;
}


export class GetConsumerV1ServicesIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceViewModel?: shared.ServiceViewModel;

  @Metadata()
  statusCode: number;
}
