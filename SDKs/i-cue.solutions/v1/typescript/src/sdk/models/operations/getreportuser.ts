import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetReportUserHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class GetReportUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetReportUserHeaders;
}


export class GetReportUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
