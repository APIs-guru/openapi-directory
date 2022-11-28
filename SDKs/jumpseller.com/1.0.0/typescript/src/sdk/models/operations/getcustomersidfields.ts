import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCustomersIdFieldsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetCustomersIdFieldsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetCustomersIdFieldsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCustomersIdFieldsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCustomersIdFieldsQueryParams;
}


export class GetCustomersIdFieldsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.CustomerAdditionalField })
  customerAdditionalFields?: shared.CustomerAdditionalField[];

  @SpeakeasyMetadata()
  notFound?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
