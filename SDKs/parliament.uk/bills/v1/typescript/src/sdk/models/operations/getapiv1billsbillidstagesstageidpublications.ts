import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiV1BillsBillIdStagesStageIdPublicationsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=billId" })
  billId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=stageId" })
  stageId: number;
}


export class GetApiV1BillsBillIdStagesStageIdPublicationsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiV1BillsBillIdStagesStageIdPublicationsPathParams;
}


export class GetApiV1BillsBillIdStagesStageIdPublicationsResponse extends SpeakeasyBase {
  @Metadata()
  billStagePublicationList?: shared.BillStagePublicationList;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
