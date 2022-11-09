import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateCollectionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=isLocked" })
  isLocked?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=parentId" })
  parentId?: string;
}


export class CreateCollectionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class CreateCollectionRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CreateCollectionQueryParams;

  @Metadata()
  security: CreateCollectionSecurity;
}


export class CreateCollectionResponse extends SpeakeasyBase {
  @Metadata()
  collectionCreationResult?: shared.CollectionCreationResult;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
