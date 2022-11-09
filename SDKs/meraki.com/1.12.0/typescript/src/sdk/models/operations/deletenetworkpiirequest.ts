import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteNetworkPiiRequestPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=requestId" })
  requestId: string;
}


export class DeleteNetworkPiiRequestRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteNetworkPiiRequestPathParams;
}


export class DeleteNetworkPiiRequestResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
