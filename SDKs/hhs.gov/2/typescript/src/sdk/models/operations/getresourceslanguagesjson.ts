import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetResourcesLanguagesJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=max" })
  max?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=sort" })
  sort?: string;
}


export class GetResourcesLanguagesJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetResourcesLanguagesJsonQueryParams;
}


export class GetResourcesLanguagesJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.LanguageWrapped })
  languageWrappeds?: shared.LanguageWrapped[];

  @SpeakeasyMetadata()
  statusCode: number;
}
