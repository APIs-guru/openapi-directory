import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RemoveFromCollectionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=collectionId" })
  collectionId: string;
}


export class RemoveFromCollectionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids: string[];
}


export class RemoveFromCollectionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class RemoveFromCollectionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RemoveFromCollectionPathParams;

  @Metadata()
  queryParams: RemoveFromCollectionQueryParams;

  @Metadata()
  security: RemoveFromCollectionSecurity;
}


export class RemoveFromCollectionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
