import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddToCollectionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=collectionId" })
  collectionId: string;
}


export class AddToCollectionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids: string[];
}


export class AddToCollectionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class AddToCollectionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddToCollectionPathParams;

  @Metadata()
  queryParams: AddToCollectionQueryParams;

  @Metadata()
  security: AddToCollectionSecurity;
}


export class AddToCollectionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
