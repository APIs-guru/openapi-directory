import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteLoadBalancersIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteLoadBalancersIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteLoadBalancersIdPathParams;
}


export class DeleteLoadBalancersIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
