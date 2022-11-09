import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetConsumerV1ServicesAllocationsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetConsumerV1ServicesAllocationsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetConsumerV1ServicesAllocationsIdPathParams;
}


export class GetConsumerV1ServicesAllocationsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceAllocationViewModel?: shared.ServiceAllocationViewModel;

  @Metadata()
  statusCode: number;
}
