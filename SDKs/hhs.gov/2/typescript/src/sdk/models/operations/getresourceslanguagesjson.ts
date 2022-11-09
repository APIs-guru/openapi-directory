import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetResourcesLanguagesJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=max" })
  max?: number;

  @Metadata({ data: "queryParam, style=form;explode=false;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=false;name=sort" })
  sort?: string;
}


export class GetResourcesLanguagesJsonRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetResourcesLanguagesJsonQueryParams;
}


export class GetResourcesLanguagesJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.LanguageWrapped })
  languageWrappeds?: shared.LanguageWrapped[];

  @Metadata()
  statusCode: number;
}
