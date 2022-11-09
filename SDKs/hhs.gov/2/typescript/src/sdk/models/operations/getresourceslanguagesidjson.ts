import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetResourcesLanguagesIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetResourcesLanguagesIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetResourcesLanguagesIdJsonPathParams;
}


export class GetResourcesLanguagesIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.LanguageWrapped })
  languageWrappeds?: shared.LanguageWrapped[];

  @Metadata()
  statusCode: number;
}
