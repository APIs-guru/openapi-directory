import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetConsumerV1ServicegroupsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetConsumerV1ServicegroupsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetConsumerV1ServicegroupsIdPathParams;
}


export class GetConsumerV1ServicegroupsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceGroupViewModel?: shared.ServiceGroupViewModel;

  @Metadata()
  statusCode: number;
}
