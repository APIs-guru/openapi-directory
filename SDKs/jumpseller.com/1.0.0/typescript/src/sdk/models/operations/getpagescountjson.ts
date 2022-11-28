import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPagesCountJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetPagesCountJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPagesCountJsonQueryParams;
}


export class GetPagesCountJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  count?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
