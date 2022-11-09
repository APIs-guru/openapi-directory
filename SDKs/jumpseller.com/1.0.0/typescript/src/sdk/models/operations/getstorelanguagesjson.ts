import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetStoreLanguagesJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetStoreLanguagesJsonRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetStoreLanguagesJsonQueryParams;
}


export class GetStoreLanguagesJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  languages?: any[];

  @Metadata()
  statusCode: number;
}
