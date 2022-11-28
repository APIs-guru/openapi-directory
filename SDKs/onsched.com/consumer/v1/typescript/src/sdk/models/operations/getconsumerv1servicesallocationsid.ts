import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetConsumerV1ServicesAllocationsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetConsumerV1ServicesAllocationsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetConsumerV1ServicesAllocationsIdPathParams;
}


export class GetConsumerV1ServicesAllocationsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serviceAllocationViewModel?: shared.ServiceAllocationViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
