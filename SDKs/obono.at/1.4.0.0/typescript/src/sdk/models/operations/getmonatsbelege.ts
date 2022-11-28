import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMonatsbelegePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=registrierkasseUuid" })
  registrierkasseUuid: string;
}


export class GetMonatsbelegeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=month" })
  month?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: number;
}


export class GetMonatsbelegeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMonatsbelegePathParams;

  @SpeakeasyMetadata()
  queryParams: GetMonatsbelegeQueryParams;
}


export class GetMonatsbelegeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Monatsbeleg })
  monatsbelegs?: shared.Monatsbeleg[];

  @SpeakeasyMetadata()
  statusCode: number;
}
