import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateCollectionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isLocked" })
  isLocked?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parentId" })
  parentId?: string;
}


export class CreateCollectionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class CreateCollectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CreateCollectionQueryParams;

  @SpeakeasyMetadata()
  security: CreateCollectionSecurity;
}


export class CreateCollectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  collectionCreationResult?: shared.CollectionCreationResult;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
