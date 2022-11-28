import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RemoveFromCollectionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collectionId" })
  collectionId: string;
}


export class RemoveFromCollectionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids: string[];
}


export class RemoveFromCollectionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class RemoveFromCollectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RemoveFromCollectionPathParams;

  @SpeakeasyMetadata()
  queryParams: RemoveFromCollectionQueryParams;

  @SpeakeasyMetadata()
  security: RemoveFromCollectionSecurity;
}


export class RemoveFromCollectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
