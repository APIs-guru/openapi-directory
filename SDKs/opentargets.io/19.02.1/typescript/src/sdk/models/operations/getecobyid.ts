import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetEcObyIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ECO_ID" })
  ecoId: string;
}


export class GetEcObyIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEcObyIdPathParams;
}


export class GetEcObyIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
