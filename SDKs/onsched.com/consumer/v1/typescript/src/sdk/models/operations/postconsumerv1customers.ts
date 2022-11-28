import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostConsumerV1CustomersRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  customerInputModel?: shared.CustomerInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  customerInputModel1?: shared.CustomerInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  customerInputModel2?: shared.CustomerInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  customerInputModel3?: shared.CustomerInputModel;
}


export class PostConsumerV1CustomersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: PostConsumerV1CustomersRequests;
}


export class PostConsumerV1CustomersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  customerViewModel?: shared.CustomerViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
