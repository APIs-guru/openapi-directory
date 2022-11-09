import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPagesCountJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetPagesCountJsonRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPagesCountJsonQueryParams;
}


export class GetPagesCountJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  count?: any;

  @Metadata()
  statusCode: number;
}
