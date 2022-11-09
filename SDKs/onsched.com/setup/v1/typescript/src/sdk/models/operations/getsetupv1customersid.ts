import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSetupV1CustomersIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSetupV1CustomersIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSetupV1CustomersIdPathParams;
}


export class GetSetupV1CustomersIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  customerViewModel?: shared.CustomerViewModel;

  @Metadata()
  statusCode: number;
}
