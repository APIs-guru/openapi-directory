import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAncestorsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class GetAncestorsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;
}


export class GetAncestorsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetAncestorsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAncestorsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetAncestorsQueryParams;

  @SpeakeasyMetadata()
  security: GetAncestorsSecurity;
}


export class GetAncestorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.BaseItemDto })
  baseItemDtos?: shared.BaseItemDto[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
