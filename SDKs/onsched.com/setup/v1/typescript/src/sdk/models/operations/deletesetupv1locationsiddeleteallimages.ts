import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteSetupV1LocationsIdDeleteallimagesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteSetupV1LocationsIdDeleteallimagesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uppercase" })
  uppercase?: boolean;
}


export class DeleteSetupV1LocationsIdDeleteallimagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteSetupV1LocationsIdDeleteallimagesPathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteSetupV1LocationsIdDeleteallimagesQueryParams;
}


export class DeleteSetupV1LocationsIdDeleteallimagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteSetupV1LocationsIdDeleteallimages200ApplicationJsonBoolean?: boolean;

  @SpeakeasyMetadata()
  statusCode: number;
}
