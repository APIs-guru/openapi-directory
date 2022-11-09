import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetReportUserHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class GetReportUserRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetReportUserHeaders;
}


export class GetReportUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
