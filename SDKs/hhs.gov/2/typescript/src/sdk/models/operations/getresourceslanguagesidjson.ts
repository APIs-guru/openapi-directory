import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetResourcesLanguagesIdJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetResourcesLanguagesIdJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetResourcesLanguagesIdJsonPathParams;
}


export class GetResourcesLanguagesIdJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.LanguageWrapped })
  languageWrappeds?: shared.LanguageWrapped[];

  @SpeakeasyMetadata()
  statusCode: number;
}
