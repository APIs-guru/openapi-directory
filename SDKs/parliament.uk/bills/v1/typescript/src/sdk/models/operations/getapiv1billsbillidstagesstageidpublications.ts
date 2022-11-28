import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiV1BillsBillIdStagesStageIdPublicationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=billId" })
  billId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=stageId" })
  stageId: number;
}


export class GetApiV1BillsBillIdStagesStageIdPublicationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiV1BillsBillIdStagesStageIdPublicationsPathParams;
}


export class GetApiV1BillsBillIdStagesStageIdPublicationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  billStagePublicationList?: shared.BillStagePublicationList;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
