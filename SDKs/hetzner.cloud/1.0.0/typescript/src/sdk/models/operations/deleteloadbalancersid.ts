import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteLoadBalancersIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteLoadBalancersIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteLoadBalancersIdPathParams;
}


export class DeleteLoadBalancersIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
