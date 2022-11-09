import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteSetupV1LocationsIdDeleteallimagesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteSetupV1LocationsIdDeleteallimagesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=uppercase" })
  uppercase?: boolean;
}


export class DeleteSetupV1LocationsIdDeleteallimagesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteSetupV1LocationsIdDeleteallimagesPathParams;

  @Metadata()
  queryParams: DeleteSetupV1LocationsIdDeleteallimagesQueryParams;
}


export class DeleteSetupV1LocationsIdDeleteallimagesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteSetupV1LocationsIdDeleteallimages200ApplicationJsonBoolean?: boolean;

  @Metadata()
  statusCode: number;
}
