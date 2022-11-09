import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetContactUserInfoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetContactUserInfoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetContactUserInfoPathParams;
}


export class GetContactUserInfoResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  userDetailsExpandVo?: any;
}
