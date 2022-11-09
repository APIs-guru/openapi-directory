import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteNetworkPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class DeleteNetworkRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteNetworkPathParams;
}


export class DeleteNetworkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
