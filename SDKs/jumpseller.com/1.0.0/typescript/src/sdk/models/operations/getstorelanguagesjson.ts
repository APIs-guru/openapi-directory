import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetStoreLanguagesJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" })
  authtoken: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" })
  login: string;
}


export class GetStoreLanguagesJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetStoreLanguagesJsonQueryParams;
}


export class GetStoreLanguagesJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  languages?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
