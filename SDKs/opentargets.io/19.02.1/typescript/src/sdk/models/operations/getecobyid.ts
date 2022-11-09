import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetEcObyIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ECO_ID" })
  ecoId: string;
}


export class GetEcObyIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEcObyIdPathParams;
}


export class GetEcObyIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
