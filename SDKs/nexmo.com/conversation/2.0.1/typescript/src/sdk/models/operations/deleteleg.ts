import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteLegPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=leg_id" })
  legId: string;
}


export class DeleteLegRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteLegPathParams;
}


export class DeleteLegResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteLeg200ApplicationJsonObject?: Map<string, any>;
}
