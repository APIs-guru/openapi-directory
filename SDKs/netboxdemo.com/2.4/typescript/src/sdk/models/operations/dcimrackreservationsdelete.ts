import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DcimRackReservationsDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimRackReservationsDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimRackReservationsDeletePathParams;
}


export class DcimRackReservationsDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
