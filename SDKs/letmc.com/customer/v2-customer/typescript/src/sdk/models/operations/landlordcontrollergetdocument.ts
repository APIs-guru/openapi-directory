import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LandlordControllerGetDocumentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shortName" })
  shortName: string;
}


export class LandlordControllerGetDocumentQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ID" })
  id: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;
}


export class LandlordControllerGetDocumentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LandlordControllerGetDocumentPathParams;

  @SpeakeasyMetadata()
  queryParams: LandlordControllerGetDocumentQueryParams;
}


export class LandlordControllerGetDocumentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  object?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
