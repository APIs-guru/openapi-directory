import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutConsumerV1CustomersIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutConsumerV1CustomersIdRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  customerUpdateModel?: shared.CustomerUpdateModel;

  @Metadata({ data: "request, media_type=application/json" })
  customerUpdateModel1?: shared.CustomerUpdateModel;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  customerUpdateModel2?: shared.CustomerUpdateModel;

  @Metadata({ data: "request, media_type=text/json" })
  customerUpdateModel3?: shared.CustomerUpdateModel;
}


export class PutConsumerV1CustomersIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutConsumerV1CustomersIdPathParams;

  @Metadata()
  request?: PutConsumerV1CustomersIdRequests;
}


export class PutConsumerV1CustomersIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
