import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAncestorsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class GetAncestorsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class GetAncestorsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetAncestorsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAncestorsPathParams;

  @Metadata()
  queryParams: GetAncestorsQueryParams;

  @Metadata()
  security: GetAncestorsSecurity;
}


export class GetAncestorsResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.BaseItemDto })
  baseItemDtos?: shared.BaseItemDto[];

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
