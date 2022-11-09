import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutAdministrationUserHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class PutAdministrationUserRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutAdministrationUserHeaders;
}


export class PutAdministrationUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
