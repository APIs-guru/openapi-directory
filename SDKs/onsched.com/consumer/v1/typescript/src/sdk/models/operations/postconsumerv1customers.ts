import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostConsumerV1CustomersRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  customerInputModel?: shared.CustomerInputModel;

  @Metadata({ data: "request, media_type=application/json" })
  customerInputModel1?: shared.CustomerInputModel;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  customerInputModel2?: shared.CustomerInputModel;

  @Metadata({ data: "request, media_type=text/json" })
  customerInputModel3?: shared.CustomerInputModel;
}


export class PostConsumerV1CustomersRequest extends SpeakeasyBase {
  @Metadata()
  request?: PostConsumerV1CustomersRequests;
}


export class PostConsumerV1CustomersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  customerViewModel?: shared.CustomerViewModel;

  @Metadata()
  statusCode: number;
}
