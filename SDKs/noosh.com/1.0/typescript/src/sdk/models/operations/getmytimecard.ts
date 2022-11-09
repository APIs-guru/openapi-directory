import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetMyTimeCardPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=timeCard_id" })
  timeCardId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetMyTimeCardRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMyTimeCardPathParams;
}


export class GetMyTimeCardResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  timeCardDetailVo?: any;
}
