import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutConsumerV1CustomersIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutConsumerV1CustomersIdRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  customerUpdateModel?: shared.CustomerUpdateModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  customerUpdateModel1?: shared.CustomerUpdateModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  customerUpdateModel2?: shared.CustomerUpdateModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  customerUpdateModel3?: shared.CustomerUpdateModel;
}


export class PutConsumerV1CustomersIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutConsumerV1CustomersIdPathParams;

  @SpeakeasyMetadata()
  request?: PutConsumerV1CustomersIdRequests;
}


export class PutConsumerV1CustomersIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
